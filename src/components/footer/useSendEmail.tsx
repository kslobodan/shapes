import { useState } from "react";
import axios from "axios";

const useSendEmail = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState<string | null>(null);

  const sendEmail = async (email: string, subject: string, text: string) => {
    const url = `https://majabo.net/api/testApi?email=${email}&subject=${subject}&message=${text}`;

    try {
      console.log("params", email, text);
      const response = await axios.get(url);
      console.log("data: ", response.data);
      setData(response?.data);
    } catch (error: any) {
      console.log("error: ", error?.message);
      setError(error?.message);
    }
  };

  return { data, error, sendEmail };
};

export default useSendEmail;
