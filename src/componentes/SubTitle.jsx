const SubTitle = ({ subtitulo }) => {
    return (
        <div className="mt-20 px-3 md:px-6 lg:px-24 py-5 bg-[#f9f9f9] w-full flex justify-start items-center">
            <h1 className="mb-2 mb-lg-0 text-[#5f687b] font-semibold text-2xl">{subtitulo}</h1>
        </div>
    );
}

export default SubTitle;