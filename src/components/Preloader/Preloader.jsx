import { ThreeDots } from "react-loader-spinner";

const style = {
    display: 'flex',
    justifyContent: 'center',
    padding: '100px 0'
}

export const Preloader = () => {
    return (
        <div style={style}>
            <ThreeDots
                height={140} 
                width={140}
                color="#8a8a8a" />
        </div>
    )
}
