
let selected = 0;

const OptGroup = ({ label, options }) => {
    return (
        <optgroup label={label}>
            {options &&
                options.length > 0 &&
                options.map((option, i) => {
                    if (selected < 1) {
                        selected = 1;
                        return (
                            <option key={i} value={option}>
                                {option}
                            </option>
                        );
                    } else {
                        return (
                            <option key={i} value={option}>
                                {option}
                            </option>
                        );
                    }
                })}
        </optgroup>
    );
};

export default OptGroup;
