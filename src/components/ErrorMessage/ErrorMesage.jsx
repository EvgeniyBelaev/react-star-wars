import UiVudeo from '@ui/UiVideo'

import video from './video/han-solo.mp4'

import style from './ErrorMessage.module.css';

const ErrorMessage = () => {
    return (
        <>
            <p className={style.text}>
                The dark side of the force has won. <br />
                We cannot display data.<br />
                Come back when we fix everything
            </p>

            <UiVudeo src={video} classes={style.video} playbackRate={1} />
        </>
    );
}

export default ErrorMessage;