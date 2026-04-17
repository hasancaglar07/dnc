import BlogForm from '../BlogForm';

export default function NewBlogPost() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Yeni Blog Yazısı</h1>
        <p className="text-slate-400">Yeni bir blog yazısı oluşturun</p>
      </div>
      <BlogForm />
    </div>
  );
}
