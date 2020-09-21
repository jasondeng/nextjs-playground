import React from 'react';
import {useRouter} from 'next/router';

const Page = () => {
  const router = useRouter();
  const {params} = router.query;

  console.log(params);

  if (!params) return null;

  return <h1>Note {params[0]}</h1>;
};

export default Page;
