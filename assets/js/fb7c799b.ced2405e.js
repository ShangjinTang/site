"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4467],{98874:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>h});var t=s(85893),i=s(11151);const o={},l="Use ZSH",r={id:"modern-linux/zsh/use-zsh",title:"Use ZSH",description:"Bash, or the Bourne Again Shell, is a hallmark of Linux systems. However, there are other shells out there that may offer extra functionality. Here's how to install one popular alternative, ZSH.",source:"@site/docs/modern-linux/03-zsh/use-zsh.md",sourceDirName:"modern-linux/03-zsh",slug:"/modern-linux/zsh/use-zsh",permalink:"/docs/modern-linux/zsh/use-zsh",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"modernlinuxSidebar",previous:{title:"Modern CLI Tools",permalink:"/docs/modern-linux/command-line-tools/modern-cli-tools"},next:{title:"Use NVIM",permalink:"/docs/modern-linux/nvim/use-nvim"}},a={},h=[{value:"What is ZSH?",id:"what-is-zsh",level:2},{value:"How to install ZSH?",id:"how-to-install-zsh",level:2},{value:"Install ZSH on Other Linux Systems",id:"install-zsh-on-other-linux-systems",level:2},{value:"How to Use ZSH Themes",id:"how-to-use-zsh-themes",level:2},{value:"Recommend Plugins",id:"recommend-plugins",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"use-zsh",children:"Use ZSH"}),"\n",(0,t.jsx)(n.p,{children:"Bash, or the Bourne Again Shell, is a hallmark of Linux systems. However, there are other shells out there that may offer extra functionality. Here's how to install one popular alternative, ZSH."}),"\n",(0,t.jsx)(n.h2,{id:"what-is-zsh",children:"What is ZSH?"}),"\n",(0,t.jsx)(n.p,{children:"ZSH, also called the Z shell, is an extended version of the Bourne Shell (sh), with new features and support for plugins and themes. Since it's based on the same shell as Bash, ZSH has many of the same features, and switching over is a breeze."}),"\n",(0,t.jsx)(n.p,{children:"ZSH vs. Bash: The Important Differences ZSH has too many features to list here, some just minor improvements to Bash, but here are some of the major ones:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Automatic cd"}),": Just type the name of the directory"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Recursive path expansion"}),": For example ",(0,t.jsx)(n.code,{children:"/u/lo/b"})," expands to ",(0,t.jsx)(n.code,{children:"/usr/local/bin"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Automatic Syntax Highlighting"}),": Words, file extensions, and other things visible in the Terminal are color-coded"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Spelling correction and approximate completion"}),": If you make a minor mistake typing a directory name, ZSH will fix it for you"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Plugin and theme support"}),": ZSH includes many different plugin frameworks"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Plugin and theme support is probably the coolest feature of ZSH and is what we'll focus on here. If you're on Linux, the command to install ZSH varies by the distro, but it should be a default package in your package manager."}),"\n",(0,t.jsx)(n.h2,{id:"how-to-install-zsh",children:"How to install ZSH?"}),"\n",(0,t.jsx)(n.p,{children:"To install ZSH on Ubuntu, or any other Debian-based distro, open up the Terminal, then run:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt install zsh\n"})}),"\n",(0,t.jsx)(n.p,{children:"To install ZSH on ArchLinux, run:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo pacman -Syu zsh\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Confirm that zsh has been installed correctly by running ",(0,t.jsx)(n.code,{children:"zsh --version"})," in the console."]}),"\n",(0,t.jsx)(n.p,{children:"Now that ZSH has been downloaded and installed correctly, we need to change the default shell from Bash to ZSH. Run:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"chsh -s $(which zsh)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If you are using a command line SSH (including ",(0,t.jsx)(n.code,{children:"WSL"}),"), logout and re-login. If you are using a graphics distribution, you should restart your PC to make it work."]}),"\n",(0,t.jsx)(n.p,{children:"When you reopen the Terminal, you'll be given some configuration options for ZSH. Once you've installed ZSH you can start adding themes and using plugins. We've covered how to do that in the last two sections of the article."}),"\n",(0,t.jsx)(n.h2,{id:"install-zsh-on-other-linux-systems",children:"Install ZSH on Other Linux Systems"}),"\n",(0,t.jsx)(n.p,{children:"Generally speaking, you'll want to use your distros default package manager to install ZSH, as it is included by default in most repositories (repos). If it is not present for some reason, you can always download the source code and install that. Additionally, the ZSH GitHub has instructions for installing it on the most popular Linux distros."}),"\n",(0,t.jsx)(n.p,{children:"Oh-My-Zsh is the most popular plugin manager for ZSH, and it comes with many built-in plugins and themes as well. There are also a couple of other plugin frameworks, including Antigen, which is a full package manager for ZSH, but Oh-My-Zsh has loads of plugins built right in and does its job well."}),"\n",(0,t.jsx)(n.p,{children:"Oh-My-Zsh has a simple install script you can run:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"\n'})}),"\n",(0,t.jsx)(n.h2,{id:"how-to-use-zsh-themes",children:"How to Use ZSH Themes"}),"\n",(0,t.jsx)(n.p,{children:"There are plenty of themes to go around, but powerlevel10k is by far the coolest. It adds a right-aligned info box, integration with git and command history, incredible customization, and wraps it all up in a slick interface based on the powerline plugin for vim. You'll want to use iTerm on macOS, or any terminal with 24-bit color, to get the most out of powerlevel10k (or any ZSH theme, really)."}),"\n",(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.a,{href:"https://github.com/romkatv/powerlevel10k",children:"Powerlevel10k"})," for details."]}),"\n",(0,t.jsxs)(n.p,{children:["You can also use ",(0,t.jsx)(n.a,{href:"https://github.com/starship/starship",children:"Starship"}),"."]}),"\n",(0,t.jsx)(n.admonition,{title:"Install Nerd Font",type:"info",children:(0,t.jsxs)(n.p,{children:["You need to install the ",(0,t.jsx)(n.a,{href:"https://github.com/ryanoasis/nerd-fonts",children:"Nerd Fonts"})," to use modern icons and themes in zsh. You can either download and manual install in ",(0,t.jsx)(n.a,{href:"https://github.com/ryanoasis/nerd-fonts/releases",children:"Nerd Fonts Releases"}),", or use a script ",(0,t.jsx)(n.a,{href:"https://github.com/ronniedroid/getnf",children:(0,t.jsx)(n.code,{children:"getnf"})}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"recommend-plugins",children:"Recommend Plugins"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/zsh-users/zsh-autosuggestions",children:"zsh-autosuggestions"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/zsh-users/zsh-syntax-highlighting",children:"zsh-syntax-highlighting"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The plugins required are not included in Oh My Zsh plugins. We will add them manually:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/zsh-users/zsh-autosuggestions.git $ZSH/plugins/zsh-autosuggestions\ngit clone https://github.com/zsh-users/zsh-syntax-highlighting.git $ZSH/plugins/zsh-syntax-highlighting\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Open the ",(0,t.jsx)(n.code,{children:".zshrc"})," file, replace the line ",(0,t.jsx)(n.code,{children:"plugins=(git z)"})," by ",(0,t.jsx)(n.code,{children:"plugins=(git z zsh-autosuggestions zsh-syntax-highlighting)"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Reload ZSH to make it work:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"exec zsh\n"})})]})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>l});var t=s(67294);const i={},o=t.createContext(i);function l(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);