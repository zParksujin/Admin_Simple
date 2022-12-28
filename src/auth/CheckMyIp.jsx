import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import PropTypes from 'prop-types';
import { checkMyIp } from "@/recoil/checkMyIp";

const CheckMyIpProvider = ({ children }) => {
    const userIP = useRecoilValue(checkMyIp);

    useEffect(() => {
        console.log(userIP);
    }, [userIP]);

    return <>{children}</>
};

CheckMyIpProvider.propsTypes = {
    children: PropTypes.node.isRequired,
  };

export default CheckMyIpProvider;