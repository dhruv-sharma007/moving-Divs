import Input from "@mui/material/Input";
import { MdOutlineAddCircle } from "react-icons/md";
import { useState } from "react";

function Inputbox({ onAddCard }) {
  const [title, setTitle] = useState("");

  const handleFileSelect = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.onchange = (event) => {
      const file = event.target.files[0];
      if (file) {
        onAddCard({
          id: Date.now(),
          title: title || file.name,
          filesize: `${(file.size / (1024 * 1024)).toFixed(2)} MB`,
          fileType: file.type || "Unknown",
          file,
        });
        setTitle(""); 
        input.value = ''; 
      }
    };
    input.click();
  };

  return (
    <div className="w-[100%] flex h-[20%] p-2 items-center justify-center ">
      <div className="  h-[50%] bg-white flex rounded-lg">
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add a title"
          className=" rounded-l-lg bg-white w-[35vw] text-white text-7xl "
        />
        <button onClick={handleFileSelect}>
          <MdOutlineAddCircle className="text-5xl" />
        </button>
      </div>
    </div>
  );
}

export default Inputbox;
