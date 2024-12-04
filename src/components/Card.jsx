import { FaRegFileAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { LuDownload } from "react-icons/lu";
import { motion } from "framer-motion";

function Card({ data, onDelete, reference }) {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = URL.createObjectURL(data.file);
    link.download = data.file.name;
    link.click();
  };


  return (
    <motion.div
      card
      drag
      dragTransition={{ bounceStiffness: 300, bounceDamping: 10 }}
      dragConstraints={reference}
      dragMomentum={false}
      className="flex-shrink-0 relative w-56 h-60 rounded-[45px] bg-zinc-900/90 text-white px-5 py-10 overflow-hidden "
    >
      <FaRegFileAlt />
      <p className="text-sm leading-tight mt-5 font-semibold">{data.title}</p>
      <div className="footer absolute bottom-0 w-full left-0 ">
        <div className="flex items-center justify-between mb-3  py-3 px-8">
          <h5>{data.filesize}</h5>
          <p className="text-xs text-gray-400">{data.fileType}</p>
          <button onClick={() => onDelete(data.id)} className="w-7 h-7 rounded-full bg-zinc-600 flex items-center justify-center">
            <IoClose />
          </button>
        </div>
        <div className="tag w-full py-4 bg-green-600 flex items-center justify-center">
          <button onClick={handleDownload}><h3 className="text-sm font-semibold hover:text-blue-500/50">Download</h3></button>
        </div>
      </div>
    </motion.div>
  );
}

export default Card;
