"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { fetchGrants, Grant, insertNewProposal } from "@/utils/mockData";
import { toast } from "../ui/use-toast";

const NewProposalForm = () => {
  const [grants, setGrants] = useState<Grant[]>([]);
  const [selectedGrant, setSelectedGrant] = useState("");
  const [title, setTitle] = useState("");
  const [background, setBackground] = useState("");
  const [aim, setAim] = useState("");
  const [timeline, setTimeline] = useState("");
  const [startTime, setStartTime] = useState<Date | undefined>(undefined);
  const [endTime, setEndTime] = useState<Date | undefined>(undefined);
  const [teamMembers, setTeamMembers] = useState("");
  const [files, setFiles] = useState<FileList | null>(null);

  useEffect(() => {
    async function fetchData() {
      const grantsData = await fetchGrants();
      setGrants(grantsData);
    }

    fetchData();
  }, []);

  const handleSubmit = async () => {
    const proposal = {
      grant: selectedGrant,
      title,
      background,
      aim,
      timeline,
      start_time: startTime,
      end_time: endTime,
      team_members: teamMembers,
      files,
    };

    const result = await insertNewProposal(proposal);
    if (!result.success) {
      toast({
        title: "New proposal submission failed",
      });
    } else {
      toast({
        title: "New proposal submission successful!",
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(e.target.files);
    }
  };

  return (
    <div className="max-w-3xl w-3/4 my-10 mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Create New Proposal</h2>

      {/* Grants */}
      <div className="mt-8">
        <Label htmlFor="grants">Grants</Label>
        <Select onValueChange={(value) => setSelectedGrant(value)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a grant you would like to apply for" />
          </SelectTrigger>
          <SelectContent>
            {grants.map((grant) => (
              <SelectItem key={grant.id} value={grant.id.toString()}>
                {grant.program_name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Title */}
      <div className="mt-8">
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter proposal title"
          className="mb-4"
        />
      </div>

      {/* Background */}
      <div className="mt-8">
        <Label htmlFor="background">Background</Label>
        <Textarea
          id="background"
          value={background}
          onChange={(e) => setBackground(e.target.value)}
          placeholder="Enter background information"
          className="mb-4"
        />
      </div>

      {/* Aim */}
      <div className="mt-8">
        <Label htmlFor="aim">Aim</Label>
        <Textarea
          id="aim"
          value={aim}
          onChange={(e) => setAim(e.target.value)}
          placeholder="Enter aim of the proposal"
          className="mb-4"
        />
      </div>

      {/* Timeline */}
      <div className="mt-8">
        <Label htmlFor="timeline">Timeline</Label>
        <Textarea
          id="timeline"
          value={timeline}
          onChange={(e) => setTimeline(e.target.value)}
          placeholder="Enter proposal timeline"
          className="mb-4"
        />
      </div>

      {/* Start Time */}
      <div className="mt-8">
        <Label htmlFor="startTime">Start Time</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={`w-full justify-start text-left font-normal ${
                !startTime && "text-gray-500"
              }`}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {startTime ? format(startTime, "PPP") : "Pick a start date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={startTime}
              onSelect={setStartTime}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>

      {/* End Time */}
      <div className="mt-8">
        <Label htmlFor="endTime">End Time</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={`w-full justify-start text-left font-normal ${
                !endTime && "text-gray-500"
              }`}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {endTime ? format(endTime, "PPP") : "Pick an end date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={endTime}
              onSelect={setEndTime}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>

      {/* Team Members */}
      <div className="mt-8">
        <Label htmlFor="teamMembers" className="mt-4">
          Team Members
        </Label>
        <Textarea
          id="teamMembers"
          value={teamMembers}
          onChange={(e) => setTeamMembers(e.target.value)}
          placeholder="Enter team members address separated by commas"
          className="mb-4"
        />
      </div>

      {/* File Upload */}
      <div className="mt-8">
        <Label htmlFor="files" className="mt-4">
          Upload Files
        </Label>
        <Input
          id="files"
          type="file"
          onChange={handleFileChange}
          multiple
          className="mb-4"
        />
      </div>

      {/* Submit Button */}
      <Button onClick={handleSubmit} className="w-full mt-4">
        Submit Proposal
      </Button>
    </div>
  );
};

export default NewProposalForm;
