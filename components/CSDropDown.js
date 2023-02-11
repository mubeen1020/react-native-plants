import React from 'react'
import SelectDropdown from 'react-native-select-dropdown'

function CSDropDown(props) {
    const {data,onSelect,buttonTextAfterSelection,label} = props
  return (
    <>
     <SelectDropdown
              data={data}
              onSelect={onSelect}
              buttonTextAfterSelection={buttonTextAfterSelection}
              buttonStyle={{borderColor:'black',borderWidth:2,width:'100%',borderRadius:20}}
              defaultButtonText={label}
              
            />
    </>
  )
}

export default CSDropDown