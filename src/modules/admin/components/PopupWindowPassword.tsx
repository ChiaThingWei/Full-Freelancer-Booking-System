

type FormProps = {
    title: string
    onCancel: () => void
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
    children: React.ReactNode
  }

const PopupWindowPassword = ({ title, onCancel, onSubmit, children }:FormProps) => {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white p-8 max-h-[80%] w-2/3 lg:w-1/3 rounded-lg overflow-y-auto flex flex-col">
        <h2 className="text-xl font-bold mb-4">{title}</h2>

        <form  onSubmit={onSubmit} className="">
        <div className="flex flex-col justify-evenly w-full mt-4">

            <div>
                {children}
            </div>

            <div className="flex justify-evenly mt-6">
                <button
                type="button"
                onClick={onCancel}
                className="bg-gray-300 w-1/3 py-2 hover:text-white cursor-pointer transition-colors duration-300  rounded-full"
                >
                Cancel
                </button>
                <button
                type="submit"
                className="bg-accentorange w-1/3 py-2 bg-blue-500 hover:text-white cursor-pointer transition-colors duration-300 rounded-full text-black"
                >
                Save
                </button>
                </div>
          </div>
        </form>

        </div>
        </div>
  )
}

export default PopupWindowPassword