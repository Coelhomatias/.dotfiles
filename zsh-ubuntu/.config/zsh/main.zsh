# Load environment variables
if [ -f ~/.config/zsh/exports.zsh ]; then
    source ~/.config/zsh/exports.zsh
fi

# Load application initializations
if [ -f ~/.config/zsh/applications.zsh ]; then
    source ~/.config/zsh/applications.zsh
fi

# Load Zsh options and history settings
if [ -f ~/.config/zsh/options.zsh ]; then
    source ~/.config/zsh/options.zsh
fi

# Load key bindings
if [ -f ~/.config/zsh/keybindings.zsh ]; then
    source ~/.config/zsh/keybindings.zsh
fi

# Load aliases
if [ -f ~/.config/zsh/aliases.zsh ]; then
    source ~/.config/zsh/aliases.zsh
fi

# Load functions
if [ -f ~/.config/zsh/functions.zsh ]; then
    source ~/.config/zsh/functions.zsh
fi

# Load plugins
if [ -f ~/.config/zsh/plugins.zsh ]; then
    source ~/.config/zsh/plugins.zsh
fi

# Load Powerlevel10k prompt
if [ -f ~/.config/zsh/powerlevel10k.zsh ]; then
    source ~/.config/zsh/powerlevel10k.zsh
fi
