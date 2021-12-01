# snippets.js
JS: snippets, algorithms, interview questions, etc.

## GitHub (multy-account setup)
priv `git@github-radulle:radulle/adventofcode.git`

other `git@github.com:radulle/adventofcode.git`

### Local settings
```
git config --list
git config --global user.name "radulle"
git config --global user.email radulle@gmail.com
```
### SSH settings
`~/.ssh/config`
```
#work
Host github-nradulaski
  IdentityFile ~/.ssh/id_ed25519
    IdentitiesOnly yes

#priv
Host github-radulle
  HostName github.com
  User git
  IdentityFile ~/.ssh/radulle
    IdentitiesOnly yes
```
