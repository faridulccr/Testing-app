const OptGroup = ({ label, options }) => {
    return (
        <optgroup label={label}>
            {options &&
                options.length > 0 &&
                options.map((option, i) => {
                    return (
                        <option key={i} value={option}>
                            {option}
                        </option>
                    );
                })}
        </optgroup>
    );
};

export default OptGroup;
