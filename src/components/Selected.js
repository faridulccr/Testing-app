const Selected = ({ selected }) => {
    return (
        <select
            className="selected-items"
            multiple={true}
            size="10"
            contentEditable={false}
        >
            {selected &&
                selected.length > 0 &&
                selected.map((item, i) => <option>{item}</option>)}
        </select>
    );
};
export default Selected;
