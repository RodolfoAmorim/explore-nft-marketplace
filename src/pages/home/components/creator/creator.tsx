export function Creator() {
  return (
    <div className="w-full rounded-lg border-2 border-gray-400/20 bg-gray-700 p-3 text-center">
      <img
        src="./images/covers/cover.png"
        alt=""
        className="h-20 w-full rounded object-cover"
      />

      <img
        src="./images/users/user.png"
        alt=""
        className="mx-auto -mt-8 aspect-square w-16 rounded-full outline outline-4 outline-gray-700 xl:w-20"
      />

      <div className="mt-3 flex w-full flex-col items-center justify-start">
        <h5 className="text-sm font-semibold leading-relaxed tracking-wide text-gray-100 xl:text-lg">
          Travis Warren
        </h5>
        <p className="text-xs leading-snug tracking-wider opacity-50 xl:text-sm">
          @travis432
        </p>
      </div>

      <div className="mt-6 flex w-full items-center justify-between">
        <div className="flex flex-1 flex-col items-center justify-center">
          <h6 className="text-sm font-semibold leading-relaxed tracking-wide text-gray-100 xl:text-lg">
            1.0K
          </h6>
          <p className="text-xs leading-snug tracking-wider opacity-50 xl:text-sm">
            Items
          </p>
        </div>

        <span className="block h-5 w-px rounded-full bg-gray-100 opacity-20" />

        <div className="flex flex-1 flex-col items-center justify-center">
          <h6 className="text-sm font-semibold leading-relaxed tracking-wide text-gray-100 xl:text-lg">
            1.8K
          </h6>
          <p className="text-xs leading-snug tracking-wider opacity-50 xl:text-sm">
            Owners
          </p>
        </div>

        <span className="block h-5 w-px rounded-full bg-gray-100 opacity-20" />

        <div className="flex flex-1 flex-col items-center justify-center">
          <h6 className="text-sm font-semibold leading-relaxed tracking-wide text-gray-100 xl:text-lg">
            1.2K
          </h6>
          <p className="text-xs leading-snug tracking-wider opacity-50 xl:text-sm">
            Traded
          </p>
        </div>
      </div>
    </div>
  )
}
