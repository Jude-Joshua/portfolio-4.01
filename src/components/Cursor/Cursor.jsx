import { useEffect, useState } from "react";
import "./cursor.scss";

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [active, setActive] = useState(false);

    const [mode, setMode] = useState("default");

    useEffect(() => {
        const handleMouseOver = (e) => {
            const cursorEl = e.target.closest("[data-cursor]");
            setMode(cursorEl ? cursorEl.dataset.cursor : "default");
        };

        window.addEventListener("mouseover", handleMouseOver);
        return () => window.removeEventListener("mouseover", handleMouseOver);
    }, []);

    useEffect(() => {
        const move = (e) => {
            setPosition({
                x: e.clientX - 3.5,
                y: e.clientY - 3.5,
            });
        };

        const activate = () => setActive(true);
        const deactivate = () => setActive(false);

        window.addEventListener("mousemove", move);
        window.addEventListener("mousedown", activate);
        window.addEventListener("mouseup", deactivate);

        return () => {
            window.removeEventListener("mousemove", move);
            window.removeEventListener("mousedown", activate);
            window.removeEventListener("mouseup", deactivate);
        };
    }, []);

    return (
        <div
            className={`cursor cursor-${mode} ${active ? "is-active" : ""}`}
            style={{
                transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
            }}
        />
    );
};

export default Cursor;
