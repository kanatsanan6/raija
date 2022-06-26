function Menu({ menuTitle, isSelected, onClick }) {
  return (
    <div className="flex cursor-pointer flex-col sm:mr-3" onClick={onClick}>
      <p className={`mb-3 pr-3 text-xs sm:pr-8 sm:text-xl ${isSelected && "text-[#085DD7]"}`}>{menuTitle}</p>
      {isSelected && <div className="h-1 w-[100%] bg-[#085DD7]" />}
    </div>
  );
}

export default Menu;
