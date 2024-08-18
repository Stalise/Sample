import React, { useLayoutEffect, useEffect, useState } from "react";

export const EffectsCheck: React.FC = () => {
    const [isShow, setIsShow] = useState(true);

    useEffect(() => {
        // console.time();
        // let i = 0;
        // while (i < 2500000000) {
        //     i++;
        // }
        // console.timeEnd();
        setIsShow(false);
    }, []);

    return (
        <div>
            <div
                onClick={() => setIsShow(!isShow)}
                style={{
                    color: "red",
                    transition: "3s",
                    border: "2px solid green",
                    padding: `${isShow ? "30" : "0"}px`,
                }}
            >
                Effects
            </div>
        </div>
    );
};
