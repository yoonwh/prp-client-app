export default async function Read(props) {
    const res = await fetch(`http://localhost:9999/topics/${props.params.id}`);
    const topics = await res.json();
    return (
        <>
            <h2>{topics.title}</h2>
            {topics.body}
            <br />
            parameters: {topics.id}
        </>
    );
}
