
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';

const SocialButtonList: React.FC = () => {

    return (
        <div className="flex items-center justify-center h-screen">
            <a
                href="https://github.com/example"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full hover:bg-gray-300 transition duration-300"
            >
                <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
            <a
                href="https://youtube.com/example"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full hover:bg-gray-300 transition duration-300"
            >
                <FontAwesomeIcon icon={faYoutube} size="lg" />
            </a>
            <a
                href="https://instagram.com/example"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full hover:bg-gray-300 transition duration-300"
            >
                <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
        </div>
    );
};
export default SocialButtonList;
