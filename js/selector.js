// ========================================
// GLOBAL VARIABLES
// ========================================
const photos = ['imagenes/DSC_0001.webp', 'imagenes/DSC_0002.webp', 'imagenes/DSC_0003.webp', 'imagenes/DSC_0004.webp', 'imagenes/DSC_0005.webp', 'imagenes/DSC_0006.webp', 'imagenes/DSC_0007.webp', 'imagenes/DSC_0008.webp', 'imagenes/DSC_0009.webp', 'imagenes/DSC_0010.webp', 'imagenes/DSC_0011.webp', 'imagenes/DSC_0012.webp', 'imagenes/DSC_0013.webp', 'imagenes/DSC_0014.webp', 'imagenes/DSC_0015.webp', 'imagenes/DSC_0016.webp', 'imagenes/DSC_0017.webp', 'imagenes/DSC_0018.webp', 'imagenes/DSC_0019.webp', 'imagenes/DSC_0020.webp', 'imagenes/DSC_0021.webp', 'imagenes/DSC_0022.webp', 'imagenes/DSC_0023.webp', 'imagenes/DSC_0024.webp', 'imagenes/DSC_0025.webp', 'imagenes/DSC_0026.webp', 'imagenes/DSC_0027.webp', 'imagenes/DSC_0028.webp', 'imagenes/DSC_0029.webp', 'imagenes/DSC_0030.webp', 'imagenes/DSC_0031.webp', 'imagenes/DSC_0032.webp', 'imagenes/DSC_0033.webp', 'imagenes/DSC_0034.webp', 'imagenes/DSC_0035.webp', 'imagenes/DSC_0036.webp', 'imagenes/DSC_0037.webp', 'imagenes/DSC_0038.webp', 'imagenes/DSC_0039.webp', 'imagenes/DSC_0040.webp', 'imagenes/DSC_0041.webp', 'imagenes/DSC_0042.webp', 'imagenes/DSC_0043.webp', 'imagenes/DSC_0044.webp', 'imagenes/DSC_0045.webp', 'imagenes/DSC_0046.webp', 'imagenes/DSC_0047.webp', 'imagenes/DSC_0048.webp', 'imagenes/DSC_0049.webp', 'imagenes/DSC_0050.webp', 'imagenes/DSC_0051.webp', 'imagenes/DSC_0052.webp', 'imagenes/DSC_0053.webp', 'imagenes/DSC_0054.webp', 'imagenes/DSC_0055.webp', 'imagenes/DSC_0056.webp', 'imagenes/DSC_0057.webp', 'imagenes/DSC_0058.webp', 'imagenes/DSC_0059.webp', 'imagenes/DSC_0060.webp', 'imagenes/DSC_0061.webp', 'imagenes/DSC_0062.webp', 'imagenes/DSC_0063.webp', 'imagenes/DSC_0064.webp', 'imagenes/DSC_0065.webp', 'imagenes/DSC_0066.webp', 'imagenes/DSC_0067.webp', 'imagenes/DSC_0068.webp', 'imagenes/DSC_0069.webp', 'imagenes/DSC_0070.webp', 'imagenes/DSC_0071.webp', 'imagenes/DSC_0072.webp', 'imagenes/DSC_0073.webp', 'imagenes/DSC_0074.webp', 'imagenes/DSC_0075.webp', 'imagenes/DSC_0076.webp', 'imagenes/DSC_0077.webp', 'imagenes/DSC_0078.webp', 'imagenes/DSC_0079.webp', 'imagenes/DSC_0080.webp', 'imagenes/DSC_0081.webp', 'imagenes/DSC_0082.webp', 'imagenes/DSC_0083.webp', 'imagenes/DSC_0084.webp', 'imagenes/DSC_0085.webp', 'imagenes/DSC_0086.webp', 'imagenes/DSC_0087.webp', 'imagenes/DSC_0088.webp', 'imagenes/DSC_0089.webp', 'imagenes/DSC_0090.webp', 'imagenes/DSC_0091.webp', 'imagenes/DSC_0092.webp', 'imagenes/DSC_0093.webp', 'imagenes/DSC_0094.webp', 'imagenes/DSC_0095.webp', 'imagenes/DSC_0096.webp', 'imagenes/DSC_0097.webp', 'imagenes/DSC_0098.webp', 'imagenes/DSC_0099.webp', 'imagenes/DSC_0100.webp', 'imagenes/DSC_0101.webp', 'imagenes/DSC_0102.webp', 'imagenes/DSC_0103.webp', 'imagenes/DSC_0104.webp', 'imagenes/DSC_0105.webp', 'imagenes/DSC_0106.webp', 'imagenes/DSC_0107.webp', 'imagenes/DSC_0108.webp', 'imagenes/DSC_0109.webp', 'imagenes/DSC_0110.webp', 'imagenes/DSC_0111.webp', 'imagenes/DSC_0112.webp', 'imagenes/DSC_0113.webp', 'imagenes/DSC_0114.webp', 'imagenes/DSC_0115.webp', 'imagenes/DSC_0116.webp', 'imagenes/DSC_0117.webp', 'imagenes/DSC_0118.webp', 'imagenes/DSC_0119.webp', 'imagenes/DSC_0120.webp', 'imagenes/DSC_0121.webp', 'imagenes/DSC_0122.webp', 'imagenes/DSC_0123.webp', 'imagenes/DSC_0124.webp', 'imagenes/DSC_0125.webp', 'imagenes/DSC_0126.webp', 'imagenes/DSC_0127.webp', 'imagenes/DSC_0128.webp', 'imagenes/DSC_0129.webp', 'imagenes/DSC_0130.webp', 'imagenes/DSC_0131.webp', 'imagenes/DSC_0132.webp', 'imagenes/DSC_0133.webp', 'imagenes/DSC_0134.webp', 'imagenes/DSC_0135.webp', 'imagenes/DSC_0136.webp', 'imagenes/DSC_0137.webp', 'imagenes/DSC_0138.webp', 'imagenes/DSC_0139.webp', 'imagenes/DSC_0140.webp', 'imagenes/DSC_0141.webp', 'imagenes/DSC_0142.webp', 'imagenes/DSC_0143.webp', 'imagenes/DSC_0144.webp', 'imagenes/DSC_0145.webp', 'imagenes/DSC_0146.webp', 'imagenes/DSC_0147.webp', 'imagenes/DSC_0148.webp', 'imagenes/DSC_0149.webp', 'imagenes/DSC_0150.webp', 'imagenes/DSC_0151.webp', 'imagenes/DSC_0152.webp', 'imagenes/DSC_0153.webp', 'imagenes/DSC_0154.webp', 'imagenes/DSC_0155.webp', 'imagenes/DSC_0156.webp', 'imagenes/DSC_0157.webp', 'imagenes/DSC_0158.webp', 'imagenes/DSC_0159.webp', 'imagenes/DSC_0160.webp', 'imagenes/DSC_0161.webp', 'imagenes/DSC_0162.webp', 'imagenes/DSC_0163.webp', 'imagenes/DSC_0164.webp', 'imagenes/DSC_0165.webp', 'imagenes/DSC_0166.webp', 'imagenes/DSC_0167.webp', 'imagenes/DSC_0168.webp', 'imagenes/DSC_0169.webp', 'imagenes/DSC_0170.webp', 'imagenes/DSC_0171.webp', 'imagenes/DSC_0172.webp', 'imagenes/DSC_0173.webp', 'imagenes/DSC_0174.webp', 'imagenes/DSC_0175.webp', 'imagenes/DSC_0176.webp', 'imagenes/DSC_0177.webp', 'imagenes/DSC_0178.webp', 'imagenes/DSC_0179.webp', 'imagenes/DSC_0180.webp', 'imagenes/DSC_0181.webp', 'imagenes/DSC_0182.webp', 'imagenes/DSC_0183.webp', 'imagenes/DSC_0184.webp', 'imagenes/DSC_0185.webp', 'imagenes/DSC_0186.webp', 'imagenes/DSC_0187.webp', 'imagenes/DSC_0188.webp', 'imagenes/DSC_0189.webp', 'imagenes/DSC_0190.webp', 'imagenes/DSC_0191.webp', 'imagenes/DSC_0192.webp', 'imagenes/DSC_0193.webp', 'imagenes/DSC_0194.webp', 'imagenes/DSC_0195.webp', 'imagenes/DSC_0196.webp', 'imagenes/DSC_0197.webp', 'imagenes/DSC_0198.webp', 'imagenes/DSC_0199.webp', 'imagenes/DSC_0200.webp', 'imagenes/DSC_0201.webp', 'imagenes/DSC_0202.webp', 'imagenes/DSC_0203.webp', 'imagenes/DSC_0204.webp', 'imagenes/DSC_0205.webp', 'imagenes/DSC_0206.webp', 'imagenes/DSC_0207.webp', 'imagenes/DSC_0578.webp', 'imagenes/DSC_0579.webp', 'imagenes/DSC_0580.webp', 'imagenes/DSC_0581.webp', 'imagenes/DSC_0582.webp', 'imagenes/DSC_0583.webp', 'imagenes/DSC_0584.webp', 'imagenes/DSC_0585.webp', 'imagenes/DSC_0586.webp', 'imagenes/DSC_0587.webp', 'imagenes/DSC_0588.webp', 'imagenes/DSC_0589.webp', 'imagenes/DSC_0590.webp', 'imagenes/DSC_0591.webp', 'imagenes/DSC_0592.webp', 'imagenes/DSC_0593.webp', 'imagenes/DSC_0594.webp', 'imagenes/DSC_0595.webp', 'imagenes/DSC_0596.webp', 'imagenes/DSC_0597.webp', 'imagenes/DSC_0598.webp', 'imagenes/DSC_0599.webp', 'imagenes/DSC_0600.webp', 'imagenes/DSC_0601.webp', 'imagenes/DSC_0602.webp', 'imagenes/DSC_0603.webp', 'imagenes/DSC_0604.webp', 'imagenes/DSC_0605.webp', 'imagenes/DSC_0606.webp', 'imagenes/DSC_0607.webp', 'imagenes/DSC_0608.webp', 'imagenes/DSC_0609.webp', 'imagenes/DSC_0610.webp', 'imagenes/DSC_0611.webp', 'imagenes/DSC_0612.webp', 'imagenes/DSC_0613.webp', 'imagenes/DSC_0614.webp', 'imagenes/DSC_0615.webp', 'imagenes/DSC_0616.webp', 'imagenes/DSC_0617.webp', 'imagenes/DSC_0618.webp', 'imagenes/DSC_0619.webp', 'imagenes/DSC_0620.webp', 'imagenes/DSC_0621.webp', 'imagenes/DSC_0622.webp', 'imagenes/DSC_0623.webp', 'imagenes/DSC_0624.webp', 'imagenes/DSC_0625.webp', 'imagenes/DSC_0626.webp', 'imagenes/DSC_0627.webp', 'imagenes/DSC_0628.webp', 'imagenes/DSC_0629.webp', 'imagenes/DSC_0630.webp', 'imagenes/DSC_0631.webp', 'imagenes/DSC_0632.webp', 'imagenes/DSC_0633.webp', 'imagenes/DSC_0634.webp', 'imagenes/DSC_0635.webp', 'imagenes/DSC_0636.webp', 'imagenes/DSC_0637.webp', 'imagenes/DSC_0638.webp', 'imagenes/DSC_0639.webp', 'imagenes/DSC_0640.webp', 'imagenes/DSC_0641.webp', 'imagenes/DSC_0642.webp', 'imagenes/DSC_0643.webp', 'imagenes/DSC_0644.webp', 'imagenes/DSC_0645.webp', 'imagenes/DSC_0646.webp', 'imagenes/DSC_0647.webp', 'imagenes/DSC_0648.webp', 'imagenes/DSC_0649.webp', 'imagenes/DSC_0650.webp', 'imagenes/DSC_0651.webp', 'imagenes/DSC_0652.webp', 'imagenes/DSC_0653.webp', 'imagenes/DSC_0654.webp', 'imagenes/DSC_0655.webp', 'imagenes/DSC_0656.webp', 'imagenes/DSC_0657.webp', 'imagenes/DSC_0658.webp', 'imagenes/DSC_0659.webp', 'imagenes/DSC_0660.webp', 'imagenes/DSC_0661.webp', 'imagenes/DSC_0662.webp', 'imagenes/DSC_0663.webp', 'imagenes/DSC_0664.webp', 'imagenes/DSC_0665.webp', 'imagenes/DSC_0666.webp', 'imagenes/DSC_0667.webp', 'imagenes/DSC_0668.webp', 'imagenes/DSC_0669.webp', 'imagenes/DSC_0670.webp', 'imagenes/DSC_0671.webp', 'imagenes/DSC_0672.webp', 'imagenes/DSC_0673.webp', 'imagenes/DSC_0674.webp', 'imagenes/DSC_0675.webp', 'imagenes/DSC_0676.webp', 'imagenes/DSC_0677.webp', 'imagenes/DSC_0678.webp', 'imagenes/DSC_0679.webp', 'imagenes/DSC_0680.webp', 'imagenes/DSC_0681.webp', 'imagenes/DSC_0682.webp', 'imagenes/DSC_0683.webp', 'imagenes/DSC_0684.webp', 'imagenes/DSC_0685.webp', 'imagenes/DSC_0686.webp', 'imagenes/DSC_0687.webp', 'imagenes/DSC_0688.webp', 'imagenes/DSC_0689.webp', 'imagenes/DSC_0690.webp', 'imagenes/DSC_0691.webp', 'imagenes/DSC_0692.webp', 'imagenes/DSC_0693.webp', 'imagenes/DSC_0694.webp', 'imagenes/DSC_0695.webp', 'imagenes/DSC_0696.webp', 'imagenes/DSC_0697.webp', 'imagenes/DSC_0698.webp', 'imagenes/DSC_0699.webp', 'imagenes/DSC_0700.webp', 'imagenes/DSC_0701.webp', 'imagenes/DSC_0702.webp', 'imagenes/DSC_0703.webp', 'imagenes/DSC_0704.webp', 'imagenes/DSC_0705.webp', 'imagenes/DSC_0706.webp', 'imagenes/DSC_0707.webp', 'imagenes/DSC_0708.webp', 'imagenes/DSC_0709.webp', 'imagenes/DSC_0710.webp', 'imagenes/DSC_0711.webp', 'imagenes/DSC_0712.webp', 'imagenes/DSC_0713.webp', 'imagenes/DSC_0714.webp', 'imagenes/DSC_0715.webp', 'imagenes/DSC_0716.webp', 'imagenes/DSC_0717.webp', 'imagenes/DSC_0718.webp', 'imagenes/DSC_0719.webp', 'imagenes/DSC_0720.webp', 'imagenes/DSC_0721.webp', 'imagenes/DSC_0722.webp', 'imagenes/DSC_0723.webp', 'imagenes/DSC_0724.webp', 'imagenes/DSC_0725.webp', 'imagenes/DSC_0726.webp', 'imagenes/DSC_0727.webp', 'imagenes/DSC_0728.webp', 'imagenes/DSC_0729.webp', 'imagenes/DSC_0730.webp', 'imagenes/DSC_0731.webp', 'imagenes/DSC_0732.webp', 'imagenes/DSC_0733.webp', 'imagenes/DSC_0734.webp', 'imagenes/DSC_0735.webp', 'imagenes/DSC_0736.webp', 'imagenes/DSC_0737.webp', 'imagenes/DSC_0738.webp', 'imagenes/DSC_0739.webp', 'imagenes/DSC_0740.webp', 'imagenes/DSC_0741.webp', 'imagenes/DSC_0742.webp', 'imagenes/DSC_0743.webp', 'imagenes/DSC_0744.webp', 'imagenes/DSC_0745.webp', 'imagenes/DSC_0746.webp', 'imagenes/DSC_0747.webp', 'imagenes/DSC_0748.webp', 'imagenes/DSC_0749.webp', 'imagenes/DSC_0750.webp', 'imagenes/DSC_0751.webp', 'imagenes/DSC_0752.webp', 'imagenes/DSC_0753.webp', 'imagenes/DSC_0754.webp', 'imagenes/DSC_0755.webp', 'imagenes/DSC_0756.webp', 'imagenes/DSC_0757.webp', 'imagenes/DSC_0758.webp', 'imagenes/DSC_0759.webp', 'imagenes/DSC_0760.webp', 'imagenes/DSC_0761.webp', 'imagenes/DSC_0762.webp', 'imagenes/DSC_0763.webp', 'imagenes/DSC_0764.webp', 'imagenes/DSC_0765.webp', 'imagenes/DSC_0766.webp', 'imagenes/DSC_0767.webp', 'imagenes/DSC_0768.webp', 'imagenes/DSC_0769.webp', 'imagenes/DSC_0770.webp', 'imagenes/DSC_0771.webp', 'imagenes/DSC_0772.webp', 'imagenes/DSC_0773.webp', 'imagenes/DSC_0774.webp', 'imagenes/DSC_0775.webp', 'imagenes/DSC_0776.webp', 'imagenes/DSC_0777.webp', 'imagenes/DSC_0778.webp', 'imagenes/DSC_0779.webp', 'imagenes/DSC_0780.webp', 'imagenes/DSC_0781.webp', 'imagenes/DSC_0782.webp', 'imagenes/DSC_0783.webp', 'imagenes/DSC_0784.webp', 'imagenes/DSC_0785.webp', 'imagenes/DSC_0786.webp', 'imagenes/DSC_0787.webp', 'imagenes/DSC_0788.webp', 'imagenes/DSC_0789.webp', 'imagenes/DSC_0790.webp', 'imagenes/DSC_0791.webp', 'imagenes/DSC_0792.webp', 'imagenes/DSC_0793.webp', 'imagenes/DSC_0794.webp', 'imagenes/DSC_0795.webp', 'imagenes/DSC_0796.webp', 'imagenes/DSC_0797.webp', 'imagenes/DSC_0798.webp', 'imagenes/DSC_0799.webp', 'imagenes/DSC_0800.webp', 'imagenes/DSC_0801.webp', 'imagenes/DSC_0802.webp', 'imagenes/DSC_0803.webp', 'imagenes/DSC_0804.webp', 'imagenes/DSC_0805.webp', 'imagenes/DSC_0806.webp', 'imagenes/DSC_0807.webp', 'imagenes/DSC_0808.webp', 'imagenes/DSC_0809.webp', 'imagenes/DSC_0810.webp', 'imagenes/DSC_0811.webp', 'imagenes/DSC_0812.webp', 'imagenes/DSC_0813.webp', 'imagenes/DSC_0814.webp', 'imagenes/DSC_0815.webp', 'imagenes/DSC_0816.webp', 'imagenes/DSC_0817.webp', 'imagenes/DSC_0818.webp', 'imagenes/DSC_0819.webp', 'imagenes/DSC_0820.webp', 'imagenes/DSC_0821.webp', 'imagenes/DSC_0822.webp', 'imagenes/DSC_0823.webp', 'imagenes/DSC_0824.webp', 'imagenes/DSC_0825.webp', 'imagenes/DSC_0826.webp', 'imagenes/DSC_0827.webp', 'imagenes/DSC_0828.webp', 'imagenes/DSC_0829.webp', 'imagenes/DSC_0830.webp', 'imagenes/DSC_0831.webp', 'imagenes/DSC_0832.webp', 'imagenes/DSC_0833.webp', 'imagenes/DSC_0834.webp', 'imagenes/DSC_0835.webp', 'imagenes/DSC_0836.webp', 'imagenes/DSC_0837.webp', 'imagenes/DSC_0838.webp', 'imagenes/DSC_0839.webp', 'imagenes/DSC_0840.webp', 'imagenes/DSC_0841.webp', 'imagenes/DSC_0842.webp', 'imagenes/DSC_0843.webp', 'imagenes/DSC_0844.webp', 'imagenes/DSC_0845.webp', 'imagenes/DSC_0846.webp', 'imagenes/DSC_0847.webp', 'imagenes/DSC_0848.webp', 'imagenes/DSC_0849.webp', 'imagenes/DSC_0850.webp', 'imagenes/DSC_0851.webp', 'imagenes/DSC_0852.webp', 'imagenes/DSC_0853.webp', 'imagenes/DSC_0854.webp', 'imagenes/DSC_0855.webp', 'imagenes/DSC_0856.webp', 'imagenes/DSC_0857.webp', 'imagenes/DSC_0858.webp', 'imagenes/DSC_0859.webp', 'imagenes/DSC_0860.webp', 'imagenes/DSC_0861.webp', 'imagenes/DSC_0862.webp', 'imagenes/DSC_0863.webp', 'imagenes/DSC_0864.webp', 'imagenes/DSC_0865.webp', 'imagenes/DSC_0866.webp', 'imagenes/DSC_0867.webp', 'imagenes/DSC_0868.webp', 'imagenes/DSC_0869.webp', 'imagenes/DSC_0870.webp', 'imagenes/DSC_0871.webp', 'imagenes/DSC_0872.webp', 'imagenes/DSC_0873.webp', 'imagenes/DSC_0874.webp', 'imagenes/DSC_0875.webp', 'imagenes/DSC_0876.webp', 'imagenes/DSC_0877.webp', 'imagenes/DSC_0878.webp', 'imagenes/DSC_0879.webp', 'imagenes/DSC_0880.webp', 'imagenes/DSC_0881.webp', 'imagenes/DSC_0882.webp', 'imagenes/DSC_0883.webp', 'imagenes/DSC_0884.webp', 'imagenes/DSC_0885.webp', 'imagenes/DSC_0886.webp', 'imagenes/DSC_0887.webp', 'imagenes/DSC_0888.webp', 'imagenes/DSC_0889.webp', 'imagenes/DSC_0890.webp', 'imagenes/DSC_0891.webp', 'imagenes/DSC_0892.webp', 'imagenes/DSC_0893.webp', 'imagenes/DSC_0894.webp', 'imagenes/DSC_0895.webp', 'imagenes/DSC_0896.webp', 'imagenes/DSC_0897.webp', 'imagenes/DSC_0898.webp', 'imagenes/DSC_0899.webp', 'imagenes/DSC_0900.webp', 'imagenes/DSC_0901.webp', 'imagenes/DSC_0902.webp', 'imagenes/DSC_0903.webp', 'imagenes/DSC_0904.webp', 'imagenes/DSC_0905.webp', 'imagenes/DSC_0906.webp', 'imagenes/DSC_0907.webp', 'imagenes/DSC_0908.webp', 'imagenes/DSC_0909.webp', 'imagenes/DSC_0910.webp', 'imagenes/DSC_0911.webp', 'imagenes/DSC_0912.webp', 'imagenes/DSC_0913.webp', 'imagenes/DSC_0914.webp', 'imagenes/DSC_0915.webp', 'imagenes/DSC_0916.webp', 'imagenes/DSC_0917.webp', 'imagenes/DSC_0918.webp', 'imagenes/DSC_0919.webp', 'imagenes/DSC_0920.webp', 'imagenes/DSC_0921.webp', 'imagenes/DSC_0922.webp', 'imagenes/DSC_0923.webp', 'imagenes/DSC_0924.webp', 'imagenes/DSC_0925.webp', 'imagenes/DSC_0926.webp', 'imagenes/DSC_0927.webp', 'imagenes/DSC_0928.webp', 'imagenes/DSC_0929.webp', 'imagenes/DSC_0930.webp', 'imagenes/DSC_0931.webp', 'imagenes/DSC_0932.webp', 'imagenes/DSC_0933.webp', 'imagenes/DSC_0934.webp', 'imagenes/DSC_0935.webp', 'imagenes/DSC_0936.webp', 'imagenes/DSC_0937.webp', 'imagenes/DSC_0938.webp', 'imagenes/DSC_0939.webp', 'imagenes/DSC_0940.webp', 'imagenes/DSC_0941.webp', 'imagenes/DSC_0942.webp', 'imagenes/DSC_0943.webp', 'imagenes/DSC_0944.webp', 'imagenes/DSC_0945.webp', 'imagenes/DSC_0946.webp', 'imagenes/DSC_0947.webp', 'imagenes/DSC_0948.webp', 'imagenes/DSC_0949.webp', 'imagenes/DSC_0950.webp', 'imagenes/DSC_0951.webp', 'imagenes/DSC_0952.webp', 'imagenes/DSC_0953.webp', 'imagenes/DSC_0954.webp', 'imagenes/DSC_0955.webp', 'imagenes/DSC_0956.webp', 'imagenes/DSC_0957.webp', 'imagenes/DSC_0958.webp', 'imagenes/DSC_0959.webp', 'imagenes/DSC_0960.webp', 'imagenes/DSC_0961.webp', 'imagenes/DSC_0962.webp', 'imagenes/DSC_0963.webp', 'imagenes/DSC_0964.webp', 'imagenes/DSC_0965.webp', 'imagenes/DSC_0966.webp', 'imagenes/DSC_0967.webp', 'imagenes/DSC_0968.webp', 'imagenes/DSC_0969.webp', 'imagenes/DSC_0970.webp', 'imagenes/DSC_0971.webp', 'imagenes/DSC_0972.webp', 'imagenes/DSC_0973.webp', 'imagenes/DSC_0974.webp', 'imagenes/DSC_0975.webp', 'imagenes/DSC_0976.webp', 'imagenes/DSC_0977.webp', 'imagenes/DSC_0978.webp', 'imagenes/DSC_0979.webp', 'imagenes/DSC_0980.webp', 'imagenes/DSC_0981.webp', 'imagenes/DSC_0982.webp', 'imagenes/DSC_0983.webp', 'imagenes/DSC_0984.webp', 'imagenes/DSC_0985.webp', 'imagenes/DSC_0986.webp', 'imagenes/DSC_0987.webp', 'imagenes/DSC_0988.webp', 'imagenes/DSC_0989.webp', 'imagenes/DSC_0990.webp', 'imagenes/DSC_0991.webp', 'imagenes/DSC_0992.webp', 'imagenes/DSC_0993.webp', 'imagenes/DSC_0994.webp', 'imagenes/DSC_0995.webp', 'imagenes/DSC_0996.webp', 'imagenes/DSC_0997.webp', 'imagenes/DSC_0998.webp', 'imagenes/DSC_0999.webp', 'imagenes/DSC_1000.webp', 'imagenes/DSC_1001.webp', 'imagenes/DSC_1002.webp', 'imagenes/DSC_1003.webp', 'imagenes/DSC_1004.webp', 'imagenes/DSC_1005.webp', 'imagenes/DSC_1006.webp', 'imagenes/DSC_1007.webp', 'imagenes/DSC_1008.webp', 'imagenes/DSC_1009.webp', 'imagenes/DSC_1010.webp', 'imagenes/DSC_1011.webp', 'imagenes/DSC_1012.webp', 'imagenes/DSC_1013.webp'];
const STORAGE_KEY = 'boda_juan_pablo_maria_jose_photo_selections';
const LIMITES = {
    ampliacion: null,
    impresion: null,
    invitacion: null
};
let photoSelections = {};
let currentPhotoIndex = null;
let currentFilter = 'all';
const PAGE_SIZE = 60;
const PAGE_KEY = 'boda_juan_pablo_maria_jose_page';
let currentPage = parseInt(sessionStorage.getItem(PAGE_KEY) || '0', 10);

// Thumbnail helper: convierte 'imagenes/foto.webp' -> 'imagenes/thumb/foto.webp'
function getThumbPath(fullPath) {
    return fullPath.replace('imagenes/', 'imagenes/thumb/');
}

// ========================================
// LOCAL STORAGE FUNCTIONS
// ========================================
function loadSelections() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            photoSelections = JSON.parse(saved);
        }
    } catch (error) {
        console.error('Error cargando selecciones:', error);
        photoSelections = {};
    }
}

function normalizeSelection(selection) {
    return {
        ampliacion: !!(selection && selection.ampliacion),
        impresion: !!(selection && selection.impresion),
        invitacion: !!(selection && selection.invitacion),
        descartada: !!(selection && selection.descartada)
    };
}

function hasAnySelection(selection) {
    const normalized = normalizeSelection(selection);
    return normalized.ampliacion || normalized.impresion || normalized.invitacion || normalized.descartada;
}

function selectionsAreEqual(a, b) {
    const left = normalizeSelection(a);
    const right = normalizeSelection(b);
    return left.ampliacion === right.ampliacion
        && left.impresion === right.impresion
        && left.invitacion === right.invitacion
        && left.descartada === right.descartada;
}

function saveSelections(options) {
    const shouldSync = !options || options.sync !== false;
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(photoSelections));
    } catch (error) {
        showToast('Error al guardar. Verifica el espacio del navegador.', 'error');
    }
    if (shouldSync && typeof sbUpsertSelections === 'function') {
        sbUpsertSelections().catch(function(e) { console.warn('[Supabase] Sync:', e.message); });
    }
}

function clearAllSelections() {
    if (confirm('¿Estás seguro de que quieres borrar TODAS las selecciones? Esta acción no se puede deshacer.')) {
        photoSelections = {};
        try { localStorage.setItem(STORAGE_KEY, '{}'); } catch(e) {}
        if (typeof sbDeleteAll === 'function') {
            sbDeleteAll().catch(function(e) { console.warn('[Supabase] DeleteAll:', e.message); });
        }
        renderGallery();
        updateStats();
        updateFilterButtons();
        showToast('Todas las selecciones han sido eliminadas', 'success');
    }
}

// ========================================
// STATS FUNCTIONS
// ========================================
function getStats() {
    const stats = {
        ampliacion: 0,
        impresion: 0,
        invitacion: 0,
        descartada: 0,
        sinClasificar: photos.length
    };

    Object.values(photoSelections).forEach(selection => {
        if (selection.ampliacion) stats.ampliacion++;
        if (selection.impresion) stats.impresion++;
        if (selection.invitacion) stats.invitacion++;
        if (selection.descartada) stats.descartada++;
    });

    stats.sinClasificar = photos.length - Object.keys(photoSelections).length;

    return stats;
}

function updateStats() {
    const stats = getStats();

    document.getElementById('countAmpliacion').textContent = stats.ampliacion;
    document.getElementById('countImpresion').textContent = stats.impresion;
    document.getElementById('countInvitacion').textContent = stats.invitacion;
    document.getElementById('countDescartada').textContent = stats.descartada;
    document.getElementById('countSinClasificar').textContent = stats.sinClasificar;
}

// ========================================
// GALLERY FUNCTIONS
// ========================================
function getFilteredIndices() {
    const indices = [];
    for (let i = 0; i < photos.length; i++) {
        const sel = photoSelections[i] || {};
        let show = false;
        switch (currentFilter) {
            case 'all': show = true; break;
            case 'ampliacion': show = sel.ampliacion === true; break;
            case 'impresion': show = sel.impresion === true; break;
            case 'invitacion': show = sel.invitacion === true; break;
            case 'descartada': show = sel.descartada === true; break;
            case 'sin-clasificar': show = !sel.ampliacion && !sel.impresion && !sel.invitacion && !sel.descartada; break;
        }
        if (show) indices.push(i);
    }
    return indices;
}

function getTotalPages() {
    return Math.ceil(getFilteredIndices().length / PAGE_SIZE);
}

function getPagePhotos() {
    const filtered = getFilteredIndices();
    const start = currentPage * PAGE_SIZE;
    const end = Math.min(start + PAGE_SIZE, filtered.length);
    return { indices: filtered.slice(start, end), total: filtered.length, start, end };
}

function goToPage(page) {
    const total = getTotalPages();
    if (page < 0) page = 0;
    if (page >= total) page = total - 1;
    currentPage = page;
    try { sessionStorage.setItem(PAGE_KEY, String(currentPage)); } catch(e) {}
    renderGallery();
    updateStats();
    updateFilterButtons();
    window.scrollTo({ top: document.querySelector('.gallery-section').offsetTop - 10, behavior: 'smooth' });
}

function renderPagination(container) {
    const totalPages = getTotalPages();
    if (totalPages <= 1) return;

    const pageData = getPagePhotos();
    const nav = document.createElement('div');
    nav.className = 'pagination-nav';
    nav.style.cssText = 'grid-column:1/-1;display:flex;align-items:center;justify-content:center;gap:8px;flex-wrap:wrap;padding:16px 0;';

    const btnStyle = 'border:none;padding:10px 18px;border-radius:25px;font-size:.95rem;font-weight:600;cursor:pointer;font-family:Lato,sans-serif;transition:all .2s;';

    if (currentPage > 0) {
        const prev = document.createElement('button');
        prev.textContent = '← Anterior';
        prev.style.cssText = btnStyle + 'background:#8b6f47;color:#fff;';
        prev.addEventListener('click', () => goToPage(currentPage - 1));
        nav.appendChild(prev);
    }

    const maxBtns = 7;
    let pageStart = Math.max(0, currentPage - 3);
    let pageEnd = Math.min(totalPages, pageStart + maxBtns);
    if (pageEnd - pageStart < maxBtns) pageStart = Math.max(0, pageEnd - maxBtns);

    for (let i = pageStart; i < pageEnd; i++) {
        const btn = document.createElement('button');
        btn.textContent = i + 1;
        const isActive = i === currentPage;
        btn.style.cssText = btnStyle + (isActive
            ? 'background:#d4a373;color:#fff;transform:scale(1.1);'
            : 'background:#eee;color:#333;');
        if (!isActive) btn.addEventListener('click', () => goToPage(i));
        nav.appendChild(btn);
    }

    if (currentPage < totalPages - 1) {
        const next = document.createElement('button');
        next.textContent = 'Siguiente →';
        next.style.cssText = btnStyle + 'background:#8b6f47;color:#fff;';
        next.addEventListener('click', () => goToPage(currentPage + 1));
        nav.appendChild(next);
    }

    const info = document.createElement('div');
    info.style.cssText = 'grid-column:1/-1;text-align:center;color:#888;font-size:.85rem;padding:4px 0;';
    info.textContent = `Fotos ${pageData.start + 1}–${pageData.end} de ${pageData.total}`;

    container.appendChild(info);
    container.appendChild(nav);
}

function renderGallery() {
    const grid = document.getElementById('photosGrid');
    if (!grid) return;
    const topPag = document.getElementById('paginationTop');
    const bottomPag = document.getElementById('paginationBottom');

    grid.innerHTML = '';
    if (topPag) topPag.innerHTML = '';
    if (bottomPag) bottomPag.innerHTML = '';

    const filtered = getFilteredIndices();
    if (filtered.length === 0) {
        grid.innerHTML = currentFilter === 'all'
            ? '<div class="no-photos-message">No hay fotos disponibles aún.</div>'
            : '<div class="no-photos-message">No hay fotos en esta categoría.</div>';
        return;
    }

    // Validar página actual
    const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
    if (currentPage >= totalPages) currentPage = totalPages - 1;
    if (currentPage < 0) currentPage = 0;

    // Paginación arriba
    if (topPag) renderPagination(topPag);

    const pageStart = currentPage * PAGE_SIZE;
    const pageEnd = Math.min(pageStart + PAGE_SIZE, filtered.length);

    for (let fi = pageStart; fi < pageEnd; fi++) {
        const index = filtered[fi];
        const photo = photos[index];
        const selection = photoSelections[index] || {};
        const hasAny = selection.ampliacion || selection.impresion || selection.invitacion || selection.descartada;

        const card = document.createElement('div');
        card.className = 'photo-card';
        card.dataset.index = index;

        if (selection.descartada) {
            card.classList.add('has-descartada');
        } else {
            const categories = [];
            if (selection.ampliacion) categories.push('ampliacion');
            if (selection.impresion) categories.push('impresion');
            if (selection.invitacion) categories.push('invitacion');

            if (categories.length > 1) {
                card.classList.add('has-multiple');
            } else if (categories.length === 1) {
                card.classList.add(`has-${categories[0]}`);
            }
        }

        let badgesHTML = '';
        if (hasAny) {
            badgesHTML = '<div class="photo-badges">';
            if (selection.ampliacion) badgesHTML += '<span class="badge badge-ampliacion">🖼️ Ampliación</span>';
            if (selection.impresion) badgesHTML += '<span class="badge badge-impresion">📸 Impresión</span>';
            if (selection.invitacion) badgesHTML += '<span class="badge badge-invitacion">💌 Invitación</span>';
            if (selection.descartada) badgesHTML += '<span class="badge badge-descartada">❌ Descartada</span>';
            badgesHTML += '</div>';
        }

        const displayNumber = `Foto ${index + 1}`;
        const mediaHTML = `
            <div class="photo-image-container">
                <img src="${getThumbPath(photo)}" alt="${displayNumber}" loading="lazy">
            </div>
        `;

        card.innerHTML = `
            ${mediaHTML}
            <div class="photo-number">${displayNumber}</div>
            ${badgesHTML}
        `;

        card.addEventListener('click', () => openModal(index));
        grid.appendChild(card);
    }

    // Paginación abajo
    if (bottomPag) renderPagination(bottomPag);
}

// ========================================
// FILTER FUNCTIONS
// ========================================
function applyFilter() {
    const cards = document.querySelectorAll('.photo-card');

    cards.forEach(card => {
        const index = parseInt(card.dataset.index);
        const selection = photoSelections[index] || {};
        let show = false;

        switch (currentFilter) {
            case 'all':
                show = true;
                break;
            case 'ampliacion':
                show = selection.ampliacion === true;
                break;
            case 'impresion':
                show = selection.impresion === true;
                break;
            case 'invitacion':
                show = selection.invitacion === true;
                break;
            case 'descartada':
                show = selection.descartada === true;
                break;
            case 'sin-clasificar':
                show = !selection.ampliacion && !selection.impresion && !selection.invitacion && !selection.descartada;
                break;
        }

        card.classList.toggle('hidden', !show);
    });
}

function setFilter(filter) {
    currentFilter = filter;
    currentPage = 0;
    renderGallery();
    updateStats();

    document.querySelectorAll('.btn-filter').forEach(btn => {
        btn.classList.remove('active');
    });

    const activeBtn = document.querySelector(`[data-filter="${filter}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}

function updateFilterButtons() {
    const stats = getStats();

    document.getElementById('btnFilterAll').textContent = `Todas (${photos.length})`;
    document.getElementById('btnFilterAmpliacion').textContent = `Ampliación (${stats.ampliacion})`;
    document.getElementById('btnFilterImpresion').textContent = `Impresión (${stats.impresion})`;
    document.getElementById('btnFilterInvitacion').textContent = `Invitación (${stats.invitacion})`;
    document.getElementById('btnFilterDescartada').textContent = `Descartadas (${stats.descartada})`;
    document.getElementById('btnFilterSinClasificar').textContent = `Sin Clasificar (${stats.sinClasificar})`;
}

// ========================================
// MODAL FUNCTIONS
// ========================================
function openModal(index) {
    currentPhotoIndex = index;
    const modal = document.getElementById('photoModal');
    const modalImageContainer = document.querySelector('.modal-image-container');
    const modalPhotoNumber = document.getElementById('modalPhotoNumber');

    const photo = photos[index];
    const displayNumber = `Foto ${index + 1}`;

    modalPhotoNumber.textContent = displayNumber;

    modalImageContainer.innerHTML = `
        <img id="modalImage" src="${photo}" alt="${displayNumber}">
        <div class="modal-photo-number" id="modalPhotoNumber">${displayNumber}</div>
    `;

    const selection = photoSelections[index] || {};

    document.querySelectorAll('.option-btn').forEach(btn => {
        const category = btn.dataset.category;
        btn.classList.toggle('selected', selection[category] === true);
    });

    modal.classList.add('active');
    updateNavigationButtons();
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    saveCurrentSelections();
    renderGallery();
    const modal = document.getElementById('photoModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    currentPhotoIndex = null;
}

// ========================================
// NAVIGATION FUNCTIONS
// ========================================
function navigatePhoto(direction) {
    if (currentPhotoIndex === null) return;

    let newIndex;
    if (direction === "next") {
        newIndex = currentPhotoIndex + 1;
        if (newIndex >= photos.length) {
            newIndex = 0;
        }
    } else if (direction === "prev") {
        newIndex = currentPhotoIndex - 1;
        if (newIndex < 0) {
            newIndex = photos.length - 1;
        }
    }

    saveCurrentSelections();
    openModal(newIndex);
}

function saveCurrentSelections() {
    if (currentPhotoIndex === null) return;

    const selectedCategories = {};
    document.querySelectorAll(".option-btn").forEach(btn => {
        const category = btn.dataset.category;
        selectedCategories[category] = btn.classList.contains("selected");
    });

    persistPhotoSelection(currentPhotoIndex, selectedCategories);
    updateStats();
    updateFilterButtons();
}

function persistPhotoSelection(index, selection, options) {
    const previousSelection = photoSelections[index] || {};
    const normalized = normalizeSelection(selection);
    const changed = !selectionsAreEqual(previousSelection, normalized);
    const silent = options && options.silent;

    if (!changed) {
        saveSelections({ sync: false });
        return false;
    }

    if (hasAnySelection(normalized)) {
        photoSelections[index] = normalized;
        saveSelections({ sync: false });
        if (typeof sbSaveSelection === 'function') {
            sbSaveSelection(index, normalized).catch(function(e) { console.warn('[Supabase] Save:', e.message); });
        } else if (typeof sbUpsertSelections === 'function') {
            sbUpsertSelections().catch(function(e) { console.warn('[Supabase] Sync:', e.message); });
        }
    } else {
        delete photoSelections[index];
        saveSelections({ sync: false });
        if (typeof sbDeleteSelection === 'function') {
            sbDeleteSelection(index).catch(function(e) { console.warn('[Supabase] Delete:', e.message); });
        }
    }

    if (!silent) showToast('Selección actualizada', 'success');
    return true;
}

function updateNavigationButtons() {
    const btnPrev = document.getElementById("btnPrevPhoto");
    const btnNext = document.getElementById("btnNextPhoto");

    if (btnPrev && btnNext) {
        btnPrev.disabled = false;
        btnNext.disabled = false;
    }
}

function saveModalSelection() {
    if (currentPhotoIndex === null) return;

    const selectedCategories = {};
    document.querySelectorAll('.option-btn').forEach(btn => {
        const category = btn.dataset.category;
        selectedCategories[category] = btn.classList.contains('selected');
    });

    persistPhotoSelection(currentPhotoIndex, selectedCategories, { silent: true });
    renderGallery();
    updateStats();
    updateFilterButtons();
    closeModal();
    showToast('Selección guardada correctamente', 'success');
}

function deleteCurrentSelection() {
    if (currentPhotoIndex === null) return;
    const displayNumber = currentPhotoIndex + 1;
    if (!confirm('¿Borrar la selección de la foto ' + displayNumber + '? Esta acción se sincronizará con todos los dispositivos.')) {
        return;
    }
    persistPhotoSelection(currentPhotoIndex, {}, { silent: true });
    document.querySelectorAll('.option-btn').forEach(btn => btn.classList.remove('selected'));
    renderGallery();
    updateStats();
    updateFilterButtons();
    closeModal();
    showToast('Selección borrada', 'success');
}

// ========================================
// EXPORT FUNCTIONS
// ========================================
function exportToJSON() {
    const exportData = {
        evento: 'Boda — Juan Pablo & María José',
        fecha_exportacion: new Date().toISOString(),
        total_fotos: photos.length,
        estadisticas: getStats(),
        selecciones: []
    };

    photos.forEach((photo, index) => {
        const selection = photoSelections[index];
        if (selection && (selection.ampliacion || selection.impresion || selection.invitacion || selection.descartada)) {
            exportData.selecciones.push({
                numero_foto: index + 1,
                archivo: photo,
                ampliacion: selection.ampliacion || false,
                impresion: selection.impresion || false,
                invitacion: selection.invitacion || false,
                descartada: selection.descartada || false
            });
        }
    });

    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `seleccion-fotos-boda-rigoberto-alondra-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);

    showToast('Reporte descargado correctamente', 'success');
}

function generateTextSummary() {
    const stats = getStats();
    let summary = '💍 SELECCIÓN DE FOTOS - BODA JUAN PABLO & MARÍA JOSÉ\n';
    summary += '═══════════════════════════════════════════════════\n\n';
    summary += `📊 RESUMEN:\n`;
    summary += `   Total de fotos: ${photos.length}\n`;
    summary += `   🖼️  Para ampliación: ${stats.ampliacion}\n`;
    summary += `   📸 Para impresión: ${stats.impresion}\n`;
    summary += `   💌 Para invitación: ${stats.invitacion}\n`;
    summary += `   ❌ Descartadas: ${stats.descartada}\n`;
    summary += `   ⭕ Sin clasificar: ${stats.sinClasificar}\n\n`;

    const categories = ['ampliacion', 'impresion', 'invitacion', 'descartada'];
    const categoryNames = {
        ampliacion: '🖼️  AMPLIACIÓN',
        impresion: '📸 IMPRESIÓN',
        invitacion: '💌 INVITACIÓN',
        descartada: '❌ DESCARTADAS'
    };

    categories.forEach(category => {
        const photosInCategory = [];
        photos.forEach((photo, index) => {
            const selection = photoSelections[index];
            if (selection && selection[category]) {
                photosInCategory.push(index + 1);
            }
        });

        if (photosInCategory.length > 0) {
            summary += `${categoryNames[category]}:\n`;
            summary += `   Fotos: ${photosInCategory.join(', ')}\n`;
            summary += `   Total: ${photosInCategory.length}\n\n`;
        }
    });

    summary += `\n📅 Generado el: ${new Date().toLocaleString('es-MX')}\n`;

    return summary;
}

function copyToClipboard() {
    const summary = generateTextSummary();

    navigator.clipboard.writeText(summary).then(() => {
        showToast('Resumen copiado al portapapeles', 'success');
    }).catch(() => {
        showToast('No se pudo copiar. Selecciona el texto manualmente.', 'error');
    });
}

// ========================================
// TOAST NOTIFICATION
// ========================================
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type}`;

    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ========================================
// EVENT LISTENERS
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    loadSelections();
    renderGallery();
    updateStats();
    updateFilterButtons();

    document.getElementById('btnFilterAll').addEventListener('click', () => setFilter('all'));
    document.getElementById('btnFilterAmpliacion').addEventListener('click', () => setFilter('ampliacion'));
    document.getElementById('btnFilterImpresion').addEventListener('click', () => setFilter('impresion'));
    document.getElementById('btnFilterInvitacion').addEventListener('click', () => setFilter('invitacion'));
    document.getElementById('btnFilterDescartada').addEventListener('click', () => setFilter('descartada'));
    document.getElementById('btnFilterSinClasificar').addEventListener('click', () => setFilter('sin-clasificar'));

    document.getElementById('btnFilterAll').dataset.filter = 'all';
    document.getElementById('btnFilterAmpliacion').dataset.filter = 'ampliacion';
    document.getElementById('btnFilterImpresion').dataset.filter = 'impresion';
    document.getElementById('btnFilterInvitacion').dataset.filter = 'invitacion';
    document.getElementById('btnFilterDescartada').dataset.filter = 'descartada';
    document.getElementById('btnFilterSinClasificar').dataset.filter = 'sin-clasificar';

    document.getElementById('btnFilterAll').classList.add('active');

    document.getElementById('btnExport').addEventListener('click', exportToJSON);
    document.getElementById('btnShare').addEventListener('click', copyToClipboard);
    document.getElementById('btnClear').addEventListener('click', clearAllSelections);

    document.querySelector('.modal-close').addEventListener('click', closeModal);
    document.getElementById('btnCancelSelection').addEventListener('click', closeModal);
    document.getElementById('btnSaveSelection').addEventListener('click', saveModalSelection);
    document.getElementById('btnDeleteSelection').addEventListener('click', deleteCurrentSelection);

    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('selected');
        });
    });

    document.getElementById('photoModal').addEventListener('click', (e) => {
        if (e.target.id === 'photoModal') {
            closeModal();
        }
    });

    document.getElementById('btnPrevPhoto').addEventListener('click', () => {
        navigatePhoto('prev');
    });

    document.getElementById('btnNextPhoto').addEventListener('click', () => {
        navigatePhoto('next');
    });

    document.addEventListener('keydown', (e) => {
        const modal = document.getElementById('photoModal');
        if (modal.classList.contains('active')) {
            if (e.key === 'Escape') {
                closeModal();
            } else if (e.key === 'Enter') {
                saveModalSelection();
            } else if (e.key === 'ArrowLeft') {
                navigatePhoto('prev');
            } else if (e.key === 'ArrowRight') {
                navigatePhoto('next');
            }
        }
    });

});

document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        saveSelections({ sync: false });
    } else if (typeof sbRefreshSelections === 'function') {
        sbRefreshSelections().catch(function(e) { console.warn('[Supabase] Refresh:', e.message); });
    }
});

window.addEventListener('beforeunload', (e) => {
    saveSelections({ sync: false });
});

// ========================================
// DOWNLOAD FUNCTIONS
// ========================================
async function downloadCurrentPhoto() {
    if (currentPhotoIndex === null) return;
    const url = photos[currentPhotoIndex];
    if (!url) return;
    const filename = 'foto-' + (currentPhotoIndex + 1) + '.jpg';
    showToast('Descargando...', 'success');
    try {
        const resp = await fetch(url, { mode: 'cors' });
        const blob = await resp.blob();
        let finalBlob = blob;
        if (!blob.type.includes('jpeg') && !blob.type.includes('jpg')) {
            const bmp = await createImageBitmap(blob);
            const canvas = document.createElement('canvas');
            canvas.width = bmp.width; canvas.height = bmp.height;
            canvas.getContext('2d').drawImage(bmp, 0, 0);
            finalBlob = await new Promise(function(res){ canvas.toBlob(res, 'image/jpeg', 0.95); });
        }
        const a = document.createElement('a');
        const objUrl = URL.createObjectURL(finalBlob);
        a.href = objUrl; a.download = filename;
        document.body.appendChild(a); a.click(); document.body.removeChild(a);
        setTimeout(function(){ URL.revokeObjectURL(objUrl); }, 2000);
        sbRegistrarVisita('descarga');
        showToast('Descargando ' + filename, 'success');
    } catch(e) {
        window.open(url, '_blank');
        showToast('Abriendo foto...', 'success');
    }
}

function downloadAndClose() {
    downloadCurrentPhoto();
    closeModal();
}

// Inyectar botones de descarga en el modal al cargar
(function injectDownloadButtons(){
    function tryInject(){
        var actions = document.querySelector('.modal-actions');
        if (!actions) return;
        if (document.getElementById('btnDownloadClose')) return;
        var btnDlClose = document.createElement('button');
        btnDlClose.id = 'btnDownloadClose';
        btnDlClose.className = 'btn';
        btnDlClose.textContent = '\u2B07 Descargar y Cerrar';
        btnDlClose.style.cssText = 'background:#6c5ce7;color:#fff;border:none;padding:8px 14px;border-radius:6px;cursor:pointer;font-size:.85rem;margin-right:4px;';
        btnDlClose.addEventListener('click', downloadAndClose);
        var btnDl = document.createElement('button');
        btnDl.id = 'btnDownloadPhoto';
        btnDl.className = 'btn';
        btnDl.textContent = '\u2B07 JPG';
        btnDl.style.cssText = 'background:#0984e3;color:#fff;border:none;padding:8px 14px;border-radius:6px;cursor:pointer;font-size:.85rem;margin-right:4px;';
        btnDl.addEventListener('click', downloadCurrentPhoto);
        actions.insertBefore(btnDlClose, actions.firstChild);
        actions.insertBefore(btnDl, btnDlClose);
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', tryInject);
    else tryInject();
})();
