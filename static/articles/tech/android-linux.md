# Android is Linux, right?!
This is a guide on how to turn your Android device into an environment you can develop in.

## Basic Setup
1. Install [Termux](https://f-droid.org/en/packages/com.termux/) from F-Droid. (That also means _install [F-Droid](https://f-droid.org/F-Droid.apk) if you don't have it_.)
2. Run `pkg update && pkg upgrade`, then `pkg install git curl`
3. Make yourself feel at home. Sometimes you'll need to do stuff in Termux, so you can install your favorite shell to make that experience more cosy. For me, that means:
   1. Install Fish shell (`apt install fish`) and make it the default login shell (`chsh -s $(which fish)`), then launch it (`fish`)
   2. Install Oh My Fish: `curl https://raw.githubusercontent.com/oh-my-fish/oh-my-fish/master/bin/install | fish`
   3. Install the robbyrussell theme: `omf install robbyrussell`
   4. Configure Git:
      1. `git config --global user.name "Joe Mama"` (replace the name with your own name)
      2. `git config --global user.email "joe@example.com"` (replace the email with your own)
      3. Set _main_ as the default git branch: `git config --global init.defaultBranch main`
      4. Generate an SSH key (`ssh-keygen -t ed25519 -C "joe@example.com"`) and upload the public key to GitHub/GitLab
4. Now, we'll install a Ubuntu container using [PRoot](https://proot-me.github.io/).
   1. `pkg install proot-distro`
   2. `proot-distro install ubuntu`
   3. `proot-distro login ubuntu`
   4. `apt update && apt upgrade`
   5. `apt install sudo adduser git curl wget`
   6. Create a new user: `useradd joe --ingroup sudo --disabled-password` (replace `joe` with your desired username)
   7. Set password to empty `passwd -d joe` (where `joe` is your username)
   8. Allow the user to use `sudo` without password:
      1. `nano /etc/sudoers`
      2. add line: `joe ALL=(ALL) NOPASSWD:ALL` (where `joe` is your username)
      3. save (Ctrl+O, Enter) and exit (Ctrl+X)
   9. `exit`

5. From now on, you can log in to the Ubuntu container using `proc-distro login ubuntu -- su -l joe` (where `joe` is your username). I advise you to create an [alias](https://www.computerworld.com/article/2598087/how-to-use-aliases-in-linux-shell-commands.html) for it – for example in my setup, I added `alias ubuntu = proc-distro login ubuntu -- su -l joe` to `~/.config/fish/config.fish`.
6. Launch the Ubuntu container and make yourself feel at home there, too (eg. repeat _Step 3_).

### Accessing Termux’s Storage From the Container and Vice Versa
From the container, you can find Termux's files under `/data/data/com.termux/files/`. From Termux, you can access the container's file system via `/data/data/com.termux/files/usr/var/lib/proot-distro/installed-rootfs/ubuntu/`.

<!--
### Install Latest Ruby
1. Launch the Ubuntu container
2. `sudo apt install rbenv`
3. Add `eval "$(rbenv init -)"` to your shell config
4. Exit Ubuntu container and launch it again
5. `git clone --depth=1 https://github.com/momo-lab/xxenv-latest.git "$(rbenv root)"/plugins/xxenv-latest`
6. `rbenv latest install --verbose` (this step can easily take 30 minutes, so be patient)
5. Check success `ruby --version`

### Install Brew
1. Launch the Ubuntu container
2. `sudo apt install ruby`
3. `sudo git clone --depth=1 https://github.com/Homebrew/brew /opt/homebrew`
3. `sudo chown -R $(whoami) /opt/homebrew`
4. Add `eval "$(/opt/homebrew/bin/brew shellenv)"` to your shell config
5. Exit Ubuntu container and launch it again
6. `brew update --force --verbose` (this step can take a lot of time, so be patient)
  * if this step fails, double check whether you have `curl` installed in your Ubuntu container (`which curl` should point to `/usr/bin/curl` and not to `/data/data/com.termux/files/usr/bin/curl`)

### Install Podman
1. `sudo apt install podman qemu-system-arm`
-->

### Install Toolchains for Programming Languages
* Rust Toolchain
  1. Launch the Ubuntu container
  2. `curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh`
  3. if you're not using bash, add `export PATH="$HOME/.cargo/bin:$PATH"` to your shell config
