console.log("Bu yerda task bajarildi!!!!");



git add .
git commit -m "feat:"
git status

// push qilmagan bolsaiz
git commit --amend
git commit --amend -m "fix:"
git push origin master --force