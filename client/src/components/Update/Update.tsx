import React from 'react';

const Update: React.FC<{prerender: () => void}> = (props: any) => {
    props.prerender();
    props.history.push('/');
    return null;
}

export default Update;