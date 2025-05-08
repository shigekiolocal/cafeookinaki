// メインのJavaScriptファイル
document.addEventListener('DOMContentLoaded', function() {
    // ナビゲーションの固定ヘッダー制御
    const header = document.querySelector('header');
    const heroSection = document.querySelector('.hero');
    
    if (header && heroSection) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
    
    // モバイルメニューの開閉（後で実装する場合）
    const menuToggle = document.querySelector('.menu-toggle');
    const navItems = document.querySelector('nav ul');
    
    if (menuToggle && navItems) {
        menuToggle.addEventListener('click', function() {
            navItems.classList.toggle('show');
            menuToggle.classList.toggle('active');
        });
    }
});
