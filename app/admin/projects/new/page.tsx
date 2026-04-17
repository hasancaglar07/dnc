import ProjectForm from '../ProjectForm';

export default function NewProject() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Yeni Proje</h1>
        <p className="text-slate-400">Yeni bir proje oluşturun</p>
      </div>
      <ProjectForm />
    </div>
  );
}
