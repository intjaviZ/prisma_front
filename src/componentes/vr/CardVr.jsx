const CardVr = ({ title, description, videoUrl }) => {
    return ( 
        <a href={videoUrl} target="_blank" rel="noopener noreferrer"
        className="group w-2/5 min-w-64 min-h-40 h-72 border border-[#10bc69] rounded-lg p-8 m-5 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="icon">
                <i className="bi bi-camera-video"></i>
              </div>
              <h3 className="text-[#10bc69] text-2xl font-semibold group-hover:text-[#0a8f4c] transition-colors duration-300">
                {title}
              </h3>
              <p className="text-gray-700 text-xl pt-5">{description}</p>
        </a>
     );
}
 
export default CardVr;