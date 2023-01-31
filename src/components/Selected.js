const Selected = ({ selected }) => {
    return (
        <>
            {selected && selected.length > 0 && (
                <div className="selected-items">
                    <ol type="1">
                        {selected.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ol>
                </div>
            )}
        </>
    );
};
export default Selected;
