function Footer() {
  
  const currentDate = new Date();

  return (
    <div className="h-20">
      <div className="w-full border-b-[1px] border-b-black "></div>
      <div className="text-[#746f72] text-[.7rem] mt-2 flex justify-between">
        <p>© {currentDate.getFullYear()} Dheeraj Saraswat</p>
        <p>{currentDate.toLocaleString()}</p>
      </div>
    </div>
  );
}
export default Footer