

const TaskList = ()=>{
    return (
      <div
        id="taskList"
        className=" w-full h-[55%] mt-10 py-5 flex gap-5 overflow-x-auto ">
        <div className=" flex-shrink-0 h-full w-[300px] bg-green-400 rounded-xl p-5 ">
          <div className="flex justify-between items-center">
            <h3 className="bg-green-600 px-3 py-1 rounded text-sm ">High</h3>
            <h4 className="text-sm">25 feb 2025</h4>
          </div>
          <h2 className="text-2xl font-semibold mt-5">Make a youtube video</h2>
          <p className="text-sm mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A mollitia veritatis ut repellat inventore cumque, aperiam provident vero?
          </p>
        </div>
        <div className=" flex-shrink-0 h-full w-[300px] bg-red-400 rounded-xl p-5 ">
          <div className="flex justify-between items-center">
            <h3 className="bg-red-600 px-3 py-1 rounded text-sm ">High</h3>
            <h4 className="text-sm">25 feb 2025</h4>
          </div>
          <h2 className="text-2xl font-semibold mt-5">Make a youtube video</h2>
          <p className="text-sm mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A mollitia veritatis ut repellat inventore cumque, aperiam provident vero?
          </p>
        </div>
        <div className=" flex-shrink-0 h-full w-[300px] bg-blue-400 rounded-xl p-5 ">
          <div className="flex justify-between items-center">
            <h3 className="bg-blue-600 px-3 py-1 rounded text-sm ">High</h3>
            <h4 className="text-sm">25 feb 2025</h4>
          </div>
          <h2 className="text-2xl font-semibold mt-5">Make a youtube video</h2>
          <p className="text-sm mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A mollitia veritatis ut repellat inventore cumque, aperiam provident vero?
          </p>
        </div>
        <div className=" flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl p-5 ">
          <div className="flex justify-between items-center">
            <h3 className="bg-yellow-600 px-3 py-1 rounded text-sm ">High</h3>
            <h4 className="text-sm">25 feb 2025</h4>
          </div>
          <h2 className="text-2xl font-semibold mt-5">Make a youtube video</h2>
          <p className="text-sm mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A mollitia veritatis ut repellat inventore cumque, aperiam provident vero?
          </p>
        </div>
      </div>
    );
}

export default TaskList;