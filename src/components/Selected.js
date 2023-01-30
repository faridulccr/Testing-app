const Selected = ({ selected }) => {
    return (
        <select size="10">
            {selected &&
                selected.length > 0 &&
                selected.map((item, i) => <option>{item}</option>)}
        </select>
    );
};
export default Selected;
