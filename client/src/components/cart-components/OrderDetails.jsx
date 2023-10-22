import {
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Stack,
  Checkbox,
} from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { useSelector } from "react-redux";

function OrderDetails() {
  const users = useSelector((state) => state.user.value);

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [usePersonalInfo, setUsePersonalInfo] = useState(false);

  const handleCheckChange = (e) => {
    setUsePersonalInfo(e.target.checked);
    if (e.target.checked) {
      setUser({ name: users.name, email: users.email, phone: user.phone });
      console.log(user);
    }
  };

  return (
    <Box
      padding={"5% 8%"}
      bgColor="white"
      marginBottom="10px"
      rounded={{ lg: "xl" }}
      shadow={{ lg: "xl" }}
      border={{ lg: "1px" }}
      borderColor={{ lg: "gray.200" }}
    >
      <Text
        fontWeight="bold"
        fontSize={{ lg: "2xl" }}
        marginBottom={{ lg: "10px" }}
      >
        Order details
      </Text>
      <Box paddingY="10px">
        <FormControl>
          <Stack spacing="2">
            <Box>
              <FormLabel>Full Name</FormLabel>
              <Input
                type="text"
                value={usePersonalInfo ? users.name : user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
                isDisabled={usePersonalInfo}
              />
            </Box>

            <Box>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                value={usePersonalInfo ? users.email : user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                disabled={usePersonalInfo}
              />
            </Box>
            <Box>
              <FormLabel>
                Phone Number{" "}
                <Text as="span" fontWeight="thin">
                  (optional)
                </Text>{" "}
              </FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <PhoneIcon color="gray.300" />
                </InputLeftElement>
                <Input
                  type="tel"
                  onChange={(e) => setUser({ ...user, phone: e.target.value })}
                />
              </InputGroup>
            </Box>
          </Stack>
        </FormControl>
      </Box>
      <Checkbox fontWeight="thin" onChange={handleCheckChange}>
        Use my personal information
      </Checkbox>
    </Box>
  );
}

export default OrderDetails;
