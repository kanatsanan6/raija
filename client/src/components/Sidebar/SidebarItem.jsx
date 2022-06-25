function SidebarItem({ itemLogo, itemName, isSelected }) {
  return (
    <div className="mb-2 flex cursor-pointer items-center">
      <div className={`mr-4 h-8 w-1 ${isSelected ? "bg-[#0052CC]" : "bg-white"}`} />
      <img src={itemLogo} alt="" />
      <p className={`text-md ml-3 mt-1 ${isSelected && "font-semibold"}`}>{itemName}</p>
    </div>
  );
}

export default SidebarItem;
