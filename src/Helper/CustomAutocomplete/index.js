import React, {useEffect, useImperativeHandle} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import {makeStyles} from "@material-ui/core/styles";

const filter = createFilterOptions();
let options = [];

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing.unit * 4,
        marginTop: 35,
        width: 210,
        marginLeft : 50
    },
    margin_width:{
        margin: theme.spacing.unit,
        marginTop: 25,
        width: 222,
    },
}));

const CustomAutocomplete = React.forwardRef((props, ref) => {
    const classes = useStyles();
    options = props.setting.array;
    const [value, setValue] = React.useState(props.setting.defaultValue);

    useImperativeHandle(ref, () => ({
        handleClear() {
            setValue('');
        }
    }));

    useEffect(() => {

    }, [value]);



    return (
        <Autocomplete
            value={value}
            onChange={(event, newValue) => {
                // Create a new value from the user input
                if (newValue && newValue.inputValue) {
                    setValue(newValue.inputValue);

                    return;
                }

                setValue(newValue);
            }}
            filterOptions={(options, params) => {
                const filtered = filter(options, params);

                // Suggest the creation of a new value
                if (params.inputValue !== '') {
                    if(props.setting.arrayName === 'category'){
                        filtered.push({
                            inputValue: params.inputValue,
                            category: `Add "${params.inputValue}"`,
                        });
                    }
                    else {
                        filtered.push({
                            inputValue: params.inputValue,
                            subcategory: `Add "${params.inputValue}"`,
                        });
                    }

                }

                return filtered;
            }}
            selectOnFocus
            clearOnBlur
            handleHomeEndKeys
            options={options}
            getOptionLabel={(option) => {
                // Value selected with enter, right from the input
                if (typeof option === 'string') {
                    return option;
                }
                // Add "xxx" option created dynamically
                if (option.inputValue) {
                    return option.inputValue;
                }
                // Regular option
                return props.setting.arrayName === 'category' ? option.category : option.subcategory;
            }}
            renderOption={
                props.setting.arrayName === 'category' ?
                    (option) => option.category :
                    (option) => option.subcategory
            }
            freeSolo
            renderInput={(params) => (
                <TextField  {...params} label={props.setting.label}
                            variant="outlined"
                            className={classes.margin_width}
                            value={value}
                            onBlur={() => props.onChange(value)}
                />
            )}
        />
    );
})

export default React.memo(CustomAutocomplete);
