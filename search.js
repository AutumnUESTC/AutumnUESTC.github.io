// 定义搜索文章的函数
function searchArticles() {
    // 获取搜索输入框和搜索结果容器的引用
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
  
    // 清空之前的搜索结果
    searchResults.innerHTML = '';
  
    // 获取用户输入的搜索关键词
    const searchTerm = searchInput.value.toLowerCase();
  
    // 定义文章列表（包含标题和链接）
    const articles = [
      { title: 'Norman Fucking Rockwell!——怀旧过后，何以面向未来？ ——Track 1', link: 'NFR.html' },
      { title: '听听那冷雨 余光中', link: 'ygz.html' },
      { title: '荷塘月色 朱自清', link: 'zzq.html' },
      // 根据需要添加更多文章
    ];
  
    // 搜索匹配的文章并显示它们
    articles.forEach((article) => {
      if (article.title.toLowerCase().includes(searchTerm)) {
        const resultItem = document.createElement('div');
        resultItem.innerHTML = `<a href="${article.link}">${article.title}</a>`;
        searchResults.appendChild(resultItem);
      }
    });
  }  