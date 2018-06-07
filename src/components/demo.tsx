import * as React from 'react';

interface IProps {
    greeting?: string;
}

const Demo: React.SFC<IProps> = (props: IProps) => (
<p>{props.greeting}, Que paso?</p>
)

Demo.defaultProps = {
    greeting: 'hola'
};

export default Demo;