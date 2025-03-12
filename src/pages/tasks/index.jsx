import tasks from '@/data/tasks.json';
import Card from 'components/Card';

function Tasks() {
  console.log(tasks);
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-4">
        {tasks.length > 0
          ? tasks.map((task) => <Card key={task.key} title={task.title} description={task.description} />)
          : 'No hay tareas'}
      </div>
    </div>
  );
}

export default Tasks;
