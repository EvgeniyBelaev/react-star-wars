import PropTypes from 'prop-types';
import cn from 'classnames'
import style from './UiVideo.module.css';

const UiVideo = ({
    src,
    playbackRate=1.0,
    classes
}) => {
    return (
        <video 
            className={cn(style.video, classes)}
            playbackRate={playbackRate}
        >
            <source src={src} />
        </video>
    );
}

UiVideo.propTypes = {
    src: PropTypes.string,
    playbackRate: PropTypes.number,
    classes: PropTypes.string,
}


export default UiVideo;