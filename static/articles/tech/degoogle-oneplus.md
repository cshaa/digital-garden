# Get and degoogle a OnePlus

The software in a new unmodified smartphone is packed full of trackers that can report any- and everything you do to the private corporations that authored the software it's running: for iOS that would be Apple, for unmodified Android it would be Google, for vendors that ship modified Android (eg. Samsung or Xiaomi), that would be Google *and* the vendor. The personal data they collect – which includes location [[1]](https://www.tomsguide.com/features/how-your-phones-location-is-being-tracked-and-how-to-turn-it-off) [[2]](https://www.nytimes.com/2020/08/19/technology/smartphone-location-tracking-opt-out.html), audio cues [[3]](https://www.forbes.com/sites/nathanpettijohn/2019/09/03/of-course-your-phone-is-listening-to-you/) [[4]](https://www.vice.com/en/article/wjbzzy/your-phone-is-listening-and-its-not-paranoia) [[5]](https://nitter.net/JL_Kroger/status/1445333142869577733), photos and videos you take [[6]](https://www.nytimes.com/2022/08/21/technology/google-surveillance-toddler-photo.html), the devices of people near you [[7]](https://slate.com/technology/2018/06/how-google-uses-wi-fi-networks-to-figure-out-your-exact-location.html) – is used mostly for targeted advertising, but could be used for anything they wish, including the manipulation of elections [[8]](https://en.wikipedia.org/wiki/Facebook%E2%80%93Cambridge_Analytica_data_scandal) or falsely reporting you as a predator to the police [[6]](https://www.nytimes.com/2022/08/21/technology/google-surveillance-toddler-photo.html).

The most straightforward way to get rid of all this tracking and still end up with a usable smartphone is to install a custom open-source Android distribution. However, choosing the correct software and the correct phone compatible with it is quite the chore. This step-by-step tutorial shows how _I_ approach this problem.

## Warning

This is a very technical and niche process. You may break things beyond repair. You may encounter weird bugs. You may find that it's no longer possible to follow the steps outlined (eg. it may no longer be possible unlock the bootloader on the phone you've just bought) leaving you with a useless phone.

## Choices

This tutorial will show you how to install **LineageOS** with **microG** and **Aurora Store**. LineageOS is considered the most popular and stable open-source Android distro, so it will be perfectly suitable for daily use even by non-tech users. The default LineageOS installation doesn't have microG, which means many important apps that rely on Google Services won't work. By adding microG, the open-source alternative to Google Services, the phone will be able to do of essentially everything the stock software could. Finally, Aurora Store allows one to easily download any app from the Play Store without needing a Google account.

Notably, this tutorial does **not** show how to root your phone. The reason is simple – I don't root my phone, so I don't have a good understanding of how to do it and what the tradeoffs are.

## Tradeoffs

After the degoogling, you won't be able to use Google Pay or Google Wallet. Also, your camera will probably be somewhat worse and more noisy than on the stock OS.

## Steps

1. Get yourself a second-hand OnePlus phone, making sure the model is listed on [this page](https://wiki.lineageos.org/devices/#oneplus). Why second-hand? Because you don't want to further contribute to the climate crisis, spin the wheels of capital and produce more e-waste, of course! Why OnePlus? Because they are good phones which last, they are supported by LineageOS, and have unlockable bootloaders (if you manage to downgrade to OxygenOS 11 – see below). Personaly, I've successfully ungoogled OnePlus 7 Pro and OnePlus Nord, and both devices are amazing to use.

2. Install [adb and fastboot](https://developer.android.com/tools/releases/platform-tools) on your PC. The details will be different depending on the OS you're using. After a successful installation, commands `adb` and `fastboot` should work in your terminal / command line.

3. Ensure your phone runs OxygenOS **11** or lower. If it does, **do not update it!** Unlocking the bootloader (which is necessary to install a custom system) has been disabled on the newer versions. If the phone has OxygenOS 12 or higher, follow these steps to downgrade it:

    1. Go to [community.oneplus.com](https://community.oneplus.com/) and search for the model of your phone together with the words “downgrade” and “OxygenOS 11” or “OOS 11”.

    2. Look for a post [like this one](https://community.oneplus.com/thread/1534473).

    3. Be patient. Don't be afraid to compile information from multiple sources. There might be useful info on the [XDA Forums](https://xdaforums.com/c/oneplus.11993/), too.

    4. The downgrade file most probably _is out there to be found_.

    5. If you don't find a file for your region, try another region. I've had luck with a downgrade file for the Indian market.

    5. If you don't succeed, sell the phone and look for another one.

4. Once your phone is on OxygenOS 11 or lower, enable Developer mode (_Settings > About Phone >_ click several times on _Build number_ until you get a toast notification that _Developer mode was enabled_). Exit settings and open it again, search for **Developer options** (might be hidden under _Advanced_ or _System_). Once there, enable **USB Debugging** and **OEM Unlocking**.

5. Connect your phone to your PC via a USB cable. Allow the debugging access on your phone. Check that adb found the device by running the following command in your terminal: `adb devices`

6. Reboot to bootloader using the command: `adb reboot fastboot`

7. Once in fastboot, run `fastboot oem unlock`. Then confirm unlocking the bootloader on your phone, and confirm factory reset. If this fails, you might be doing something wrong – if the phone shows the option to "reboot to bootloader", try that option and run the command again. Still nothing? Make sure the phone really is on OxygenOS 11 or lower.

8. Once the fastboot is unlocked, reboot the phone to OS (either by choosing something like “Reboot to System” on the phone, or by `fastboot reboot`, or by turning it off and on again).

9. Upgrade the phone to OxygenOS 12. Installing all the available updates via _Settings_ might be enough, but if your specific phone is still in OOS12 beta, you'll have to upgrade manually – see the [community.oneplus.com](https://community.oneplus.com/) forums again. If you don't succeed in finding an image that works, you can also check the XDA Forums again – for example with Nord I had to use the Indian OOS12 Beta 2 image from [here](https://xdaforums.com/t/oneplus-nord-rom-ota-oxygen-os-repo-of-oxygen-os-builds.4138085/).

10. On your PC, go to [LineageOS devices page](https://wiki.lineageos.org/devices/#oneplus), select your device, download the latest LineageOS build (most probably it will be four files: `lineage-xxx.zip`, `boot.img`, `dtbo.img` and `vbmeta.img`). Then follow the step by step guide there.

11. Hooray! Now you're on LineageOS! If you don't need Google Services for anything, you can stop right there. However, many apps including banking, food delivery and many social apps, won't work on your phone. The steps that follow will show you how to install microG, an open-source replacement for Google Services. You can definitely try using clean LineageOS and decide whether you need microG later – however installing microG requires a factory reset, so in that scenario you'd lose all your data.

12. On your PC, download a [_“LineageOS for microG”_](https://download.lineage.microg.org/) build according to your device's codename (listed [here](https://wiki.lineageos.org/devices/#oneplus) – for example the codename of OnePlus Nord is `avicii`). You will need five files:
    * `lineage-xxx-microG-xxx.zip`
    * `lineage-xxx-microG-xxx-boot.img`
    * `lineage-xxx-microG-xxx-dtbo.img`
    * `lineage-xxx-microG-xxx-vbmeta.img`
    * `lineage-xxx-microG-xxx-recovery.img`.

13. Enable Developer mode again (_Settings > About phone > click several times on Build number_), then go to _Developer options_ and enable **USB debugging**. Connect the phone to PC and reboot to bootloader using `adb reboot fastboot`.

14. Flash the four `.img` files to the corresponding partitions using:
    * `fastboot flash boot lineage-xxx-microG-xxx-boot.img`
    * `fastboot flash dtbo lineage-xxx-microG-xxx-dtbo.img`
    * `fastboot flash vbmeta lineage-xxx-microG-xxx-vbmeta.img`
    * `fastboot flash recovery lineage-xxx-microG-xxx-recovery.img`

15. Do not restart the phone to system – if you've restarted it, repeat step&nbsp;14.

16. Reboot to the newly flashed recovery using: `fastboot reboot recovery`

17. Select _Apply update > Update from ADB_, then sideload the image: `adb sideload lineage-xxx-microG-xxx.zip`

18. Reboot. Now you have successfully installed LineageOS with microG. You can go to _microG settings_ (it's an app you have installed by default) and check whether any more steps are needed.

19. Finally, we'll install Aurora Store. On your PC, download [Aurora Services](https://gitlab.com/AuroraOSS/AuroraServices/-/releases) – you will need the `AuroraServices-xxx-ota.zip`. Extract the archive. You should get three files: `AuroraServices.apk`, `com.aurora.services.xml` and `69-AuroraServices.sh`. Also, download [`AuroraStore_xxx.apk`](https://gitlab.com/AuroraOSS/AuroraStore/-/releases).

20. Enable Developer mode again, in Developer options enable **USB debugging** and **Rooted debugging**. Connect the phone to PC.

21. Install Aurora using the following commands:
    * `adb root`
    * `adb remount`
    * `adb push AuroraServices.apk /system/priv-app/`
    * `adb push permissions_com.aurora.services.xml /system/etc/permissions/`
    * `adb push 69-AuroraServices.sh /system/addon.d/ (from the .zip file)`
    * `adb install AuroraStore_xxx.apk`

22. Reboot the phone, open Aurora Store and select Aurora Service as the installation method.

## Things to do after the installation

You might want to install:
* [Signal](https://signal.org/) – an end-to-end encrypted messaging app with great UX
* [Brave](https://brave.com/) – a browser with ad blocking built in
* [Grayjay](https://grayjay.app/) – a streaming app that allows you to watch YouTube (without ads), Twitch, Nebula, ...
* [GCam](https://www.celsoazevedo.com/files/android/google-camera/) – a port of _Pixel Camera_, a fully featured camera app by Google

You might also like to edit the Quick Settings tiles, so that _Mic access_ and _Camera access_ are more easily reachable – that way you can have mic & camera disabled most of the time and be certain that no app can access them.
