function Error404() {
  return (
    <>
        <div className="flex justify-center items-center p-20 bg-black">
            <div className="flex flex-col gap-6 p-20 justify-center text-center">
                <h1 className="text-white text-6xl">
                    BOXFITNESS
                </h1>
                <p className="text-white text-2xl">Error: 404</p>
                <p className="text-white text-2xl">Page Not Found</p>
            </div>
        </div>
    </>
  )
}

export default Error404