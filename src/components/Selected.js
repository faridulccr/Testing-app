const Selected = ({ selected }) => {
    return (
        <select
            className="selected-items"
            multiple={true}
        >
            {selected &&
                selected.length > 0 &&
                selected.map((item, i) => <option disabled selected>{item}</option>)}
        </select>
    );
};
export default Selected;
