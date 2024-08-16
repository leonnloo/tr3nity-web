export function Footer() {
    return (
      <footer className="bg-gray-100 py-6 mt-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-1/3 text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-lg font-semibold">Project Name</h3>
              <p className="text-sm text-gray-600">© 2024 All Rights Reserved</p>
            </div>
            <div className="w-full md:w-1/3 text-center mb-4 md:mb-0">
              <a href="#" className="text-blue-600 hover:text-blue-800 mx-2">Terms of Service</a>
              <a href="#" className="text-blue-600 hover:text-blue-800 mx-2">Privacy Policy</a>
            </div>
            <div className="w-full md:w-1/3 text-center md:text-right">
              <a href="#" className="text-gray-600 hover:text-gray-800 mx-2">Facebook</a>
              <a href="#" className="text-gray-600 hover:text-gray-800 mx-2">Twitter</a>
              <a href="#" className="text-gray-600 hover:text-gray-800 mx-2">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }