import { useStore } from "@nanostores/preact";
import { isSidebarOpen } from "@states/sidebar";

export default function StatefulSidebar({ title, postsByCategory }) {
  const $isSidebarOpen = useStore(isSidebarOpen);
  return <aside className={$isSidebarOpen ? "visible" : "hidden"} class="mt-6 transition-all duration-500">
    <nav class="sticky bg-gray-100 p-2 w-60 h-full">
      <h1 class="text-xl p-2">{title}</h1>
      <ol class="list-none p-2 grid grid-cols-1 gap-4">
        {Object.entries(postsByCategory).map(([category, posts]) => {
          return <li>
            <h2>{category}</h2>
            <ul class="pl-4">
              {posts.map(post =>
                <li>
                  <a href={post.url} class="text-blue-500 hover:text-blue-700 hover:underline">{post.title}</a>
                </li>
              )}
            </ul>
          </li>
        })}
      </ol>
    </nav>
  </aside>;
}