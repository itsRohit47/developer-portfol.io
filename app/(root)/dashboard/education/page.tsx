export default function EducationHome() {
  return (
    <div className="grid grid-cols-3 gap-3 h-full">
      <div className="col-span-1 bg-white rounded-lg border shadow-sm p-2">
        <h1 className="text-gray-500 mt-3 text-sm px-1">Education</h1>
        <button className="bg-white mt-3 rounded-lg border w-full py-2 shadow-sm text-sm hover:bg-gray-50">
          Add Education
        </button>
      </div>
    </div>
  );
}
