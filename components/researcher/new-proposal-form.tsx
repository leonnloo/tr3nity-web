"use client";

import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { fetchGrants, Grant } from "@/utils/mockData";
import { toast } from "../ui/use-toast";
import { reseacher_wallet_address } from "@/app/researcher/page";

const NewProposalForm = () => {
  const [grants, setGrants] = useState<Grant[]>([]);
  const [selectedGrant, setSelectedGrant] = useState<string>("Neurobiology");
  const [title, setTitle] = useState<string>("CRISPR Gene Therapy for Rare Diseases");
  const [background, setBackground] = useState<string>("A groundbreaking project focused on developing CRISPR-based gene therapies for rare genetic disorders, aiming to provide curative treatments for previously untreatable conditions.");
  const [aim, setAim] = useState<string>("To revolutionize the treatment of rare genetic disorders through innovative CRISPR technology, offering hope for curative therapies and improved quality of life for patients.");
  const [timeline, setTimeline] = useState<string>("Phase 1: Research (Months 1-6) - Conduct initial research and literature review.\n" +
              "Phase 2: Development (Months 7-12) - Develop and test therapeutic approaches.\n" +
              "Phase 3: Testing (Months 13-18) - Conduct clinical trials and evaluate results.");
  const [startTime, setStartTime] = useState<Date | undefined>(undefined);
  const [endTime, setEndTime] = useState<Date | undefined>(undefined);
  const [teamMembers, setTeamMembers] = useState<string>("['David Wilson', 'Eva Green', 'Frank Miller']");
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const grantsData = await fetchGrants();
        setGrants(grantsData);
      } catch (err) {
        console.error('Error fetching grants:', err);
      }
    }

    fetchData();
  }, []);

  const handleSubmit = async () => {
    if (!selectedGrant || !title || !background || !aim || !timeline || !startTime || !endTime || !teamMembers || !file) {
      toast({
        title: "All fields are required",
      });
      return;
    }

    const formData = new FormData();
    formData.append('grant', selectedGrant);
    formData.append('researcher_address', reseacher_wallet_address); // Replace with actual address
    formData.append('project_name', title);
    formData.append('project_description', background);
    formData.append('start_date', format(startTime, "yyyy-MM-dd"));
    formData.append('end_date', format(endTime, "yyyy-MM-dd"));
    formData.append('team_members', teamMembers);
    formData.append('aim', aim);
    formData.append('timeline', timeline);
    formData.append('upload_file', file);

    setLoading(true);
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_DJANGO_URL}tr3nity_certificate/research_upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.status === 'success') {
        toast({
          title: "New proposal submission successful!",
        });
      } else {
        toast({
          title: "New proposal submission failed",
          description: response.data.message,
        });
      }
    } catch (error) {
      console.error('Error uploading research:', error);
      toast({
        title: "An error occurred while submitting the proposal",
        description: "Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
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
        <Label htmlFor="file" className="mt-4">
          Upload File
        </Label>
        <Input
          id="file"
          type="file"
          onChange={handleFileChange}
          className="mb-4"
        />
      </div>

      {/* Submit Button */}
      <Button onClick={handleSubmit} className="w-full mt-4" disabled={loading}>
        {loading ? 'Submitting...' : 'Submit Proposal'}
      </Button>
    </div>
  );
};

export default NewProposalForm;
