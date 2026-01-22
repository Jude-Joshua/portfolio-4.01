import "./tooltip.scss"

const Tooltip = ({ content, x, y, visible }) => {

  if (!visible) return null;

    return (
        <div 
            className="tooltip-wrapper"
            style={{
                left: x,
                top: y,
            }}
        >
            <span className="tooltip-dot"></span>

            <div className="tooltip t-caption">
                <p>{content}</p>
            </div>
        </div>
    );
}

export default Tooltip;