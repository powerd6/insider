import { useStore } from "@nanostores/preact";
import { isSidebarOpen } from "@states/sidebar";
import moutString from 'mout/string.js';

const { trim } = moutString;

export default function StatefulSidebar({ title, postsByCategory, currentPage }) {
  const $isSidebarOpen = useStore(isSidebarOpen);

  function isCurrentPage(href) {
    return trim(currentPage, ['/', ' ']) == trim(href, ['/', ' ']);
  }

  return <aside class={`relative bg-gray-100 transition-all duration-500 p-2 w-52 h-full rounded-r-xl ${$isSidebarOpen ? "left-0" : "-left-52 -ml-52"}`}>
    <nav class=" mt-6 ">
      <h1 class="text-xl p-2">{title}</h1>
      <ol class="list-none p-2 grid grid-cols-1 gap-4">
        {Object.entries(postsByCategory).map(([category, posts]) => {
          return <li>
            <h2>{category}</h2>
            <ul class="pl-4">
              {posts.map(post =>
                <li>
                  {
                    isCurrentPage(post.url) ?
                      <span href={post.url} class="text-pink-500 hover:text-pink-700 hover:underline">{post.title}</span> :
                      <a href={post.url} class="text-blue-500 hover:text-blue-700 hover:underline">{post.title}</a>}
                </li>
              )}
            </ul>
          </li>
        })}
      </ol>
    </nav>
  </aside>;
}