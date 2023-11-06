import { Checkbox, Stack } from "@chakra-ui/react";
import { useState } from "react";

export const CheckBoxEvent = () => {
   const [checkedItems, setCheckedItems] = useState([false, false]);

   const allChecked = checkedItems.every(Boolean);
   const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

   return (
      <>
         <Checkbox
            isChecked={allChecked}
            isIndeterminate={isIndeterminate}
            onChange={(e) =>
               setCheckedItems([e.target.checked, e.target.checked])
            }>
            All
         </Checkbox>
         <Stack pl={6} mt={1} spacing={1}>
            <Checkbox
               isChecked={checkedItems[0]}
               onChange={(e) =>
                  setCheckedItems([e.target.checked, checkedItems[1]])
               }>
               Unpaid
            </Checkbox>
            <Checkbox
               isChecked={checkedItems[1]}
               onChange={(e) =>
                  setCheckedItems([checkedItems[0], e.target.checked])
               }>
               Paid
            </Checkbox>
         </Stack>
      </>
   );
};
