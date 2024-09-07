function ListRender() {
    const tasks = [{title:"เบิกงบ"}, {title:"ซื้อคอม"}];
    return (
      <ul>
        {tasks.map((task,i) => (
          <li key={i}>{i+' '+task.title}</li>
        ))}
      </ul>
    );
  }
  export default ListRender;