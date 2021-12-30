//This is a read-only transcription of the neural network I designed in my NEAT-JAVA project.
//It will parse a text file to create a feed forward neural network and then be used to determine which move the snake should make.

export default class NeuralNet {

    static getMove() 
    {
        //this.prototype.readBrain();
        this.prototype.interpretBrain("Layer: 0[NewLine]Node: 0[NewLine]Connection to: 0 -- -7.8804655[NewLine]Connection to: 1 -- 3.8126585[NewLine]Connection to: 2 -- -0.98190194[NewLine]Connection to: 3 -- -5.1526146[NewLine]Connection to: 4 -- -0.72865146[NewLine]Connection to: 5 -- 5.5785775[NewLine]Connection to: 6 -- 3.0186634[NewLine]Connection to: 7 -- 1.9043171[NewLine]Connection to: 8 -- -2.1951911[NewLine]Connection to: 9 -- 3.4926903[NewLine]Connection to: 10 -- 2.6064727[NewLine]Connection to: 11 -- -0.81272036[NewLine]Connection to: 12 -- 0.06519477[NewLine]Connection to: 13 -- -4.7370977[NewLine]Connection to: 14 -- -3.4263341[NewLine]Connection to: 15 -- 6.0366125[NewLine]Connection to: 16 -- -6.8252654[NewLine]Connection to: 17 -- -6.7259517[NewLine]Connection to: 18 -- 0.05103211[NewLine]Connection to: 19 -- 4.786662[NewLine]Connection to: 20 -- 8.457546[NewLine]Connection to: 21 -- 3.7707322[NewLine]Connection to: 22 -- -0.15828735[NewLine]Connection to: 23 -- -2.4855845[NewLine]Connection to: 24 -- 1.3918121[NewLine]Connection to: 25 -- -6.991539[NewLine]Connection to: 26 -- 0.104500994[NewLine]Connection to: 27 -- -10.1365795[NewLine]Connection to: 28 -- 1.5423964[NewLine]Connection to: 29 -- -2.9778135[NewLine]Node END[NewLine]Node: 1[NewLine]Connection to: 0 -- 3.9441335[NewLine]Connection to: 1 -- 0.21406661[NewLine]Connection to: 2 -- 3.6063685[NewLine]Connection to: 3 -- 1.688652[NewLine]Connection to: 4 -- -1.8968076[NewLine]Connection to: 5 -- 0.019386336[NewLine]Connection to: 6 -- -2.8632312[NewLine]Connection to: 7 -- 3.3416808[NewLine]Connection to: 8 -- -5.211134[NewLine]Connection to: 9 -- 1.7737243[NewLine]Connection to: 10 -- -3.878208[NewLine]Connection to: 11 -- 2.2347286[NewLine]Connection to: 12 -- 2.5051904[NewLine]Connection to: 13 -- -0.6244699[NewLine]Connection to: 14 -- -0.35189265[NewLine]Connection to: 15 -- 0.34332168[NewLine]Connection to: 16 -- -2.3004274[NewLine]Connection to: 17 -- 1.3864512[NewLine]Connection to: 18 -- 1.8605235[NewLine]Connection to: 19 -- 2.697666[NewLine]Connection to: 20 -- -6.457049[NewLine]Connection to: 21 -- 1.1329228[NewLine]Connection to: 22 -- 3.7776427[NewLine]Connection to: 23 -- 5.220819[NewLine]Connection to: 24 -- 0.7754175[NewLine]Connection to: 25 -- 0.66547865[NewLine]Connection to: 26 -- 1.407178[NewLine]Connection to: 27 -- 2.7134066[NewLine]Connection to: 28 -- -0.09993168[NewLine]Connection to: 29 -- -5.108503[NewLine]Node END[NewLine]Node: 2[NewLine]Connection to: 0 -- -2.0421436[NewLine]Connection to: 1 -- -1.1957643[NewLine]Connection to: 2 -- -0.94752085[NewLine]Connection to: 3 -- -1.6044481[NewLine]Connection to: 4 -- -2.9407318[NewLine]Connection to: 5 -- -2.78126[NewLine]Connection to: 6 -- 1.9042392[NewLine]Connection to: 7 -- 3.5875573[NewLine]Connection to: 8 -- 0.30995762[NewLine]Connection to: 9 -- 3.4468207[NewLine]Connection to: 10 -- -4.376401[NewLine]Connection to: 11 -- -5.6574755[NewLine]Connection to: 12 -- 3.643404[NewLine]Connection to: 13 -- -1.9622704[NewLine]Connection to: 14 -- 1.5336092[NewLine]Connection to: 15 -- 3.308231[NewLine]Connection to: 16 -- -2.5870874[NewLine]Connection to: 17 -- 3.6721644[NewLine]Connection to: 18 -- -3.6713603[NewLine]Connection to: 19 -- -1.0439479[NewLine]Connection to: 20 -- -5.641236[NewLine]Connection to: 21 -- -2.3757174[NewLine]Connection to: 22 -- -0.4720484[NewLine]Connection to: 23 -- -1.1050928[NewLine]Connection to: 24 -- -2.9218745[NewLine]Connection to: 25 -- 5.019331[NewLine]Connection to: 26 -- -7.625342[NewLine]Connection to: 27 -- -1.166409[NewLine]Connection to: 28 -- 1.1677616[NewLine]Connection to: 29 -- 1.575157[NewLine]Node END[NewLine]Node: 3[NewLine]Connection to: 0 -- -3.0659103[NewLine]Connection to: 1 -- 4.028171[NewLine]Connection to: 2 -- 4.0263896[NewLine]Connection to: 3 -- -3.858852[NewLine]Connection to: 4 -- -4.420794[NewLine]Connection to: 5 -- 3.448614[NewLine]Connection to: 6 -- 2.017021[NewLine]Connection to: 7 -- 1.3014992[NewLine]Connection to: 8 -- -5.0185175[NewLine]Connection to: 9 -- -5.4543276[NewLine]Connection to: 10 -- -2.4770079[NewLine]Connection to: 11 -- 1.7733791[NewLine]Connection to: 12 -- -0.71318156[NewLine]Connection to: 13 -- 0.441082[NewLine]Connection to: 14 -- -0.51821524[NewLine]Connection to: 15 -- 0.9814643[NewLine]Connection to: 16 -- 6.1884265[NewLine]Connection to: 17 -- -5.2477784[NewLine]Connection to: 18 -- -3.0312383[NewLine]Connection to: 19 -- -5.570984[NewLine]Connection to: 20 -- 0.45798916[NewLine]Connection to: 21 -- 2.4905982[NewLine]Connection to: 22 -- -3.3433867[NewLine]Connection to: 23 -- -0.5097099[NewLine]Connection to: 24 -- -0.10838874[NewLine]Connection to: 25 -- -2.648853[NewLine]Connection to: 26 -- -0.75471735[NewLine]Connection to: 27 -- -0.10546853[NewLine]Connection to: 28 -- -1.1840764[NewLine]Connection to: 29 -- -5.058438[NewLine]Node END[NewLine]Node: 4[NewLine]Connection to: 0 -- 2.9277794[NewLine]Connection to: 1 -- -6.960171[NewLine]Connection to: 2 -- -1.4359754[NewLine]Connection to: 3 -- -0.7684652[NewLine]Connection to: 4 -- -0.35166508[NewLine]Connection to: 5 -- -2.580363[NewLine]Connection to: 6 -- 0.5128956[NewLine]Connection to: 7 -- 1.7502397[NewLine]Connection to: 8 -- -0.7709889[NewLine]Connection to: 9 -- 0.51715523[NewLine]Connection to: 10 -- 2.65486[NewLine]Connection to: 11 -- -3.3158555[NewLine]Connection to: 12 -- -3.195398[NewLine]Connection to: 13 -- -5.3019657[NewLine]Connection to: 14 -- -0.85061663[NewLine]Connection to: 15 -- -4.6709127[NewLine]Connection to: 16 -- -0.21201243[NewLine]Connection to: 17 -- 1.8181877[NewLine]Connection to: 18 -- -7.3898544[NewLine]Connection to: 19 -- -6.859977[NewLine]Connection to: 20 -- -2.193214[NewLine]Connection to: 21 -- -3.9397035[NewLine]Connection to: 22 -- 2.9446106[NewLine]Connection to: 23 -- -6.7429957[NewLine]Connection to: 24 -- -0.9365999[NewLine]Connection to: 25 -- 2.4394882[NewLine]Connection to: 26 -- 3.5713632[NewLine]Connection to: 27 -- 4.463161[NewLine]Connection to: 28 -- 1.8459575[NewLine]Connection to: 29 -- -2.836842[NewLine]Node END[NewLine]Node: 5[NewLine]Connection to: 0 -- 1.6821437[NewLine]Connection to: 1 -- -1.4083185[NewLine]Connection to: 2 -- 1.2515812[NewLine]Connection to: 3 -- 0.9925521[NewLine]Connection to: 4 -- 1.1976566[NewLine]Connection to: 5 -- 1.860276[NewLine]Connection to: 6 -- -8.103962[NewLine]Connection to: 7 -- -6.990015[NewLine]Connection to: 8 -- 4.6767755[NewLine]Connection to: 9 -- -1.5942239[NewLine]Connection to: 10 -- 5.9514875[NewLine]Connection to: 11 -- -0.0918818[NewLine]Connection to: 12 -- -1.88619[NewLine]Connection to: 13 -- -1.2239809[NewLine]Connection to: 14 -- 4.4002786[NewLine]Connection to: 15 -- 6.245497[NewLine]Connection to: 16 -- 3.618943[NewLine]Connection to: 17 -- 4.6449175[NewLine]Connection to: 18 -- -1.482457[NewLine]Connection to: 19 -- 2.693084[NewLine]Connection to: 20 -- -2.391535[NewLine]Connection to: 21 -- -5.270869[NewLine]Connection to: 22 -- -1.9794472[NewLine]Connection to: 23 -- 3.042856[NewLine]Connection to: 24 -- -6.2950397[NewLine]Connection to: 25 -- -3.328564[NewLine]Connection to: 26 -- -2.1155314[NewLine]Connection to: 27 -- 5.8581705[NewLine]Connection to: 28 -- -2.1000068[NewLine]Connection to: 29 -- -4.732108[NewLine]Node END[NewLine]Node: 6[NewLine]Connection to: 0 -- 2.3421752[NewLine]Connection to: 1 -- -0.5183477[NewLine]Connection to: 2 -- -6.7944236[NewLine]Connection to: 3 -- -6.1038857[NewLine]Connection to: 4 -- -0.7497228[NewLine]Connection to: 5 -- 0.7692057[NewLine]Connection to: 6 -- -4.106535[NewLine]Connection to: 7 -- 3.6368299[NewLine]Connection to: 8 -- 1.0942086[NewLine]Connection to: 9 -- -5.738964[NewLine]Connection to: 10 -- 0.054337606[NewLine]Connection to: 11 -- -0.26756746[NewLine]Connection to: 12 -- 5.2515736[NewLine]Connection to: 13 -- -7.16854[NewLine]Connection to: 14 -- -0.37752762[NewLine]Connection to: 15 -- -3.095239[NewLine]Connection to: 16 -- -0.056383908[NewLine]Connection to: 17 -- -3.7572913[NewLine]Connection to: 18 -- -3.5794814[NewLine]Connection to: 19 -- -0.044217452[NewLine]Connection to: 20 -- -5.675549[NewLine]Connection to: 21 -- 2.989324[NewLine]Connection to: 22 -- 0.17762269[NewLine]Connection to: 23 -- -3.3705478[NewLine]Connection to: 24 -- 1.5058416[NewLine]Connection to: 25 -- -3.0719383[NewLine]Connection to: 26 -- -1.6839049[NewLine]Connection to: 27 -- -4.782546[NewLine]Connection to: 28 -- -6.5745573[NewLine]Connection to: 29 -- 1.7911923[NewLine]Node END[NewLine]Node: 7[NewLine]Connection to: 0 -- -0.9127249[NewLine]Connection to: 1 -- 2.0826478[NewLine]Connection to: 2 -- -3.208053[NewLine]Connection to: 3 -- 0.22269808[NewLine]Connection to: 4 -- -4.263825[NewLine]Connection to: 5 -- -3.1827624[NewLine]Connection to: 6 -- 3.2358787[NewLine]Connection to: 7 -- 1.7424607[NewLine]Connection to: 8 -- 4.863825[NewLine]Connection to: 9 -- 0.92949945[NewLine]Connection to: 10 -- -0.6962168[NewLine]Connection to: 11 -- -3.2205107[NewLine]Connection to: 12 -- -0.50327885[NewLine]Connection to: 13 -- 1.800369[NewLine]Connection to: 14 -- -8.094075[NewLine]Connection to: 15 -- -1.4037071[NewLine]Connection to: 16 -- -6.56828[NewLine]Connection to: 17 -- -0.3676449[NewLine]Connection to: 18 -- -2.425391[NewLine]Connection to: 19 -- 5.1409054[NewLine]Connection to: 20 -- 1.9398577[NewLine]Connection to: 21 -- 0.1277823[NewLine]Connection to: 22 -- 3.0950532[NewLine]Connection to: 23 -- -1.0546684[NewLine]Connection to: 24 -- 0.94814855[NewLine]Connection to: 25 -- 1.4008545[NewLine]Connection to: 26 -- -1.6293986[NewLine]Connection to: 27 -- 6.8589506[NewLine]Connection to: 28 -- -1.8671623[NewLine]Connection to: 29 -- 4.6381845[NewLine]Node END[NewLine]Node: 8[NewLine]Connection to: 0 -- -4.984405[NewLine]Connection to: 1 -- -0.57084066[NewLine]Connection to: 2 -- -5.2463183[NewLine]Connection to: 3 -- 0.87168413[NewLine]Connection to: 4 -- -1.2976533[NewLine]Connection to: 5 -- 0.4942338[NewLine]Connection to: 6 -- 1.2790816[NewLine]Connection to: 7 -- -0.73209083[NewLine]Connection to: 8 -- 2.7300067[NewLine]Connection to: 9 -- -5.634701[NewLine]Connection to: 10 -- 1.5891873[NewLine]Connection to: 11 -- -7.0517936[NewLine]Connection to: 12 -- 2.912841[NewLine]Connection to: 13 -- -0.8096445[NewLine]Connection to: 14 -- -1.234528[NewLine]Connection to: 15 -- -2.2315426[NewLine]Connection to: 16 -- -0.2581119[NewLine]Connection to: 17 -- 5.2884445[NewLine]Connection to: 18 -- -2.1943185[NewLine]Connection to: 19 -- 0.071218655[NewLine]Connection to: 20 -- -3.0642374[NewLine]Connection to: 21 -- -3.132642[NewLine]Connection to: 22 -- -0.6826609[NewLine]Connection to: 23 -- -0.39094418[NewLine]Connection to: 24 -- 0.3962618[NewLine]Connection to: 25 -- 3.2840328[NewLine]Connection to: 26 -- 3.8205397[NewLine]Connection to: 27 -- -2.566578[NewLine]Connection to: 28 -- 2.3154614[NewLine]Connection to: 29 -- -3.572272[NewLine]Node END[NewLine]Node: 9[NewLine]Connection to: 0 -- 4.461836[NewLine]Connection to: 1 -- -1.7947859[NewLine]Connection to: 2 -- -0.711315[NewLine]Connection to: 3 -- -2.9994469[NewLine]Connection to: 4 -- 3.5457466[NewLine]Connection to: 5 -- -0.028635189[NewLine]Connection to: 6 -- 2.410581[NewLine]Connection to: 7 -- 3.9680917[NewLine]Connection to: 8 -- 1.8752697[NewLine]Connection to: 9 -- 2.6655905[NewLine]Connection to: 10 -- 0.43469334[NewLine]Connection to: 11 -- -1.1105793[NewLine]Connection to: 12 -- -5.7796526[NewLine]Connection to: 13 -- 0.75869215[NewLine]Connection to: 14 -- -1.1366662[NewLine]Connection to: 15 -- -1.6151549[NewLine]Connection to: 16 -- 3.0592563[NewLine]Connection to: 17 -- -1.6160476[NewLine]Connection to: 18 -- 3.6320267[NewLine]Connection to: 19 -- -1.2559922[NewLine]Connection to: 20 -- -4.7119145[NewLine]Connection to: 21 -- -0.06500225[NewLine]Connection to: 22 -- -1.0195285[NewLine]Connection to: 23 -- 1.7493727[NewLine]Connection to: 24 -- 2.9351077[NewLine]Connection to: 25 -- -1.778697[NewLine]Connection to: 26 -- 1.9163365[NewLine]Connection to: 27 -- 1.2148792[NewLine]Connection to: 28 -- 1.3799312[NewLine]Connection to: 29 -- 4.8957696[NewLine]Node END[NewLine]Layer END[NewLine]Layer: 1[NewLine]Node: 0[NewLine]Connection to: 0 -- 4.467222[NewLine]Connection to: 1 -- -1.586034[NewLine]Connection to: 2 -- -5.7702274[NewLine]Connection to: 3 -- -6.889976[NewLine]Connection to: 4 -- -1.1131539[NewLine]Connection to: 5 -- -1.5923911[NewLine]Connection to: 6 -- 6.418511[NewLine]Connection to: 7 -- 0.4487329[NewLine]Connection to: 8 -- 3.4801967[NewLine]Connection to: 9 -- -2.1458695[NewLine]Node END[NewLine]Node: 1[NewLine]Connection to: 0 -- -1.5032392[NewLine]Connection to: 1 -- 4.090762[NewLine]Connection to: 2 -- -4.219636[NewLine]Connection to: 3 -- 8.504205[NewLine]Connection to: 4 -- -2.1423316[NewLine]Connection to: 5 -- -3.1890094[NewLine]Connection to: 6 -- 0.102362856[NewLine]Connection to: 7 -- -6.272903[NewLine]Connection to: 8 -- -1.9121418[NewLine]Connection to: 9 -- -1.79112[NewLine]Node END[NewLine]Node: 2[NewLine]Connection to: 0 -- -3.48566[NewLine]Connection to: 1 -- -2.4181626[NewLine]Connection to: 2 -- 3.3975537[NewLine]Connection to: 3 -- 2.9122558[NewLine]Connection to: 4 -- 1.3824202[NewLine]Connection to: 5 -- 1.8437018[NewLine]Connection to: 6 -- 2.356989[NewLine]Connection to: 7 -- 1.0395209[NewLine]Connection to: 8 -- -1.4770087[NewLine]Connection to: 9 -- -6.6672626[NewLine]Node END[NewLine]Node: 3[NewLine]Connection to: 0 -- -0.06314114[NewLine]Connection to: 1 -- 1.7367877[NewLine]Connection to: 2 -- -1.3681875[NewLine]Connection to: 3 -- 3.0718775[NewLine]Connection to: 4 -- -0.89566255[NewLine]Connection to: 5 -- -0.5765127[NewLine]Connection to: 6 -- 5.9838524[NewLine]Connection to: 7 -- 2.6798358[NewLine]Connection to: 8 -- -1.5187197[NewLine]Connection to: 9 -- -0.7085602[NewLine]Node END[NewLine]Node: 4[NewLine]Connection to: 0 -- 1.0677458[NewLine]Connection to: 1 -- 5.990149[NewLine]Connection to: 2 -- 3.916929[NewLine]Connection to: 3 -- 1.3748208[NewLine]Connection to: 4 -- 2.4335697[NewLine]Connection to: 5 -- -2.9733067[NewLine]Connection to: 6 -- 1.2046925[NewLine]Connection to: 7 -- 3.8668382[NewLine]Connection to: 8 -- -6.280303[NewLine]Connection to: 9 -- -3.4539998[NewLine]Node END[NewLine]Node: 5[NewLine]Connection to: 0 -- 1.2267847[NewLine]Connection to: 1 -- -4.7112246[NewLine]Connection to: 2 -- 3.8737786[NewLine]Connection to: 3 -- 0.30347192[NewLine]Connection to: 4 -- 10.208372[NewLine]Connection to: 5 -- -1.2090458[NewLine]Connection to: 6 -- -3.439056[NewLine]Connection to: 7 -- 1.8129923[NewLine]Connection to: 8 -- 0.03289038[NewLine]Connection to: 9 -- -4.584118[NewLine]Node END[NewLine]Node: 6[NewLine]Connection to: 0 -- -1.5506191[NewLine]Connection to: 1 -- 0.7673962[NewLine]Connection to: 2 -- 1.5429016[NewLine]Connection to: 3 -- -0.5502862[NewLine]Connection to: 4 -- -8.635999[NewLine]Connection to: 5 -- 0.4640848[NewLine]Connection to: 6 -- 2.3496485[NewLine]Connection to: 7 -- 0.3430968[NewLine]Connection to: 8 -- 3.2902906[NewLine]Connection to: 9 -- -1.7630324[NewLine]Node END[NewLine]Node: 7[NewLine]Connection to: 0 -- -3.1985514[NewLine]Connection to: 1 -- -2.3692362[NewLine]Connection to: 2 -- -2.0026753[NewLine]Connection to: 3 -- -9.363736[NewLine]Connection to: 4 -- -9.077712[NewLine]Connection to: 5 -- -2.144857[NewLine]Connection to: 6 -- -0.9438805[NewLine]Connection to: 7 -- -3.6212826[NewLine]Connection to: 8 -- -0.41073632[NewLine]Connection to: 9 -- 1.8499415[NewLine]Node END[NewLine]Node: 8[NewLine]Connection to: 0 -- -1.4038186[NewLine]Connection to: 1 -- 0.046478987[NewLine]Connection to: 2 -- 1.5155061[NewLine]Connection to: 3 -- 0.23762177[NewLine]Connection to: 4 -- 2.529998[NewLine]Connection to: 5 -- -1.3207762[NewLine]Connection to: 6 -- 0.13089792[NewLine]Connection to: 7 -- -4.4522443[NewLine]Connection to: 8 -- -1.919095[NewLine]Connection to: 9 -- -0.898062[NewLine]Node END[NewLine]Node: 9[NewLine]Connection to: 0 -- 7.746983[NewLine]Connection to: 1 -- 3.7649658[NewLine]Connection to: 2 -- -4.89245[NewLine]Connection to: 3 -- -4.652636[NewLine]Connection to: 4 -- -4.2525363[NewLine]Connection to: 5 -- -3.1541266[NewLine]Connection to: 6 -- 6.248262[NewLine]Connection to: 7 -- -4.0517087[NewLine]Connection to: 8 -- -3.8217165[NewLine]Connection to: 9 -- -3.0868027[NewLine]Node END[NewLine]Node: 10[NewLine]Connection to: 0 -- 3.3182902[NewLine]Connection to: 1 -- -4.1449575[NewLine]Connection to: 2 -- -4.632505[NewLine]Connection to: 3 -- 2.2004292[NewLine]Connection to: 4 -- 0.51078254[NewLine]Connection to: 5 -- 3.7391243[NewLine]Connection to: 6 -- 0.57860845[NewLine]Connection to: 7 -- 0.30869383[NewLine]Connection to: 8 -- 1.6845695[NewLine]Connection to: 9 -- -0.54894227[NewLine]Node END[NewLine]Node: 11[NewLine]Connection to: 0 -- -4.784556[NewLine]Connection to: 1 -- 2.7106636[NewLine]Connection to: 2 -- -1.1839756[NewLine]Connection to: 3 -- -0.8969795[NewLine]Connection to: 4 -- 5.107509[NewLine]Connection to: 5 -- -1.8663547[NewLine]Connection to: 6 -- -0.7999316[NewLine]Connection to: 7 -- -0.38882107[NewLine]Connection to: 8 -- 0.9008917[NewLine]Connection to: 9 -- -0.8386808[NewLine]Node END[NewLine]Node: 12[NewLine]Connection to: 0 -- 0.6511268[NewLine]Connection to: 1 -- -1.802449[NewLine]Connection to: 2 -- -0.6674871[NewLine]Connection to: 3 -- -0.53386843[NewLine]Connection to: 4 -- -2.5469112[NewLine]Connection to: 5 -- -7.5406194[NewLine]Connection to: 6 -- -0.9210023[NewLine]Connection to: 7 -- -7.6572638[NewLine]Connection to: 8 -- -2.355532[NewLine]Connection to: 9 -- 2.3720834[NewLine]Node END[NewLine]Node: 13[NewLine]Connection to: 0 -- 3.0652554[NewLine]Connection to: 1 -- -4.772202[NewLine]Connection to: 2 -- -5.15794[NewLine]Connection to: 3 -- -0.32690382[NewLine]Connection to: 4 -- -1.6067109[NewLine]Connection to: 5 -- -5.1477456[NewLine]Connection to: 6 -- 3.54623[NewLine]Connection to: 7 -- 1.8996763[NewLine]Connection to: 8 -- 0.036559075[NewLine]Connection to: 9 -- -3.4937294[NewLine]Node END[NewLine]Node: 14[NewLine]Connection to: 0 -- -5.945151[NewLine]Connection to: 1 -- -5.2823577[NewLine]Connection to: 2 -- 2.1684465[NewLine]Connection to: 3 -- 5.954183[NewLine]Connection to: 4 -- -4.245751[NewLine]Connection to: 5 -- -6.758155[NewLine]Connection to: 6 -- -0.66246516[NewLine]Connection to: 7 -- 4.2061815[NewLine]Connection to: 8 -- 3.1985052[NewLine]Connection to: 9 -- -4.776954[NewLine]Node END[NewLine]Node: 15[NewLine]Connection to: 0 -- 2.3916597[NewLine]Connection to: 1 -- 4.900218[NewLine]Connection to: 2 -- 4.5755[NewLine]Connection to: 3 -- 2.2526062[NewLine]Connection to: 4 -- 3.6276066[NewLine]Connection to: 5 -- 6.4639277[NewLine]Connection to: 6 -- -3.0493102[NewLine]Connection to: 7 -- 5.4922814[NewLine]Connection to: 8 -- -2.1812704[NewLine]Connection to: 9 -- 0.265114[NewLine]Node END[NewLine]Node: 16[NewLine]Connection to: 0 -- 0.25442845[NewLine]Connection to: 1 -- 2.1025212[NewLine]Connection to: 2 -- 3.1808846[NewLine]Connection to: 3 -- 4.6552963[NewLine]Connection to: 4 -- -5.256516[NewLine]Connection to: 5 -- 3.9323204[NewLine]Connection to: 6 -- 1.433789[NewLine]Connection to: 7 -- 0.20965923[NewLine]Connection to: 8 -- -5.570115[NewLine]Connection to: 9 -- -5.4390697[NewLine]Node END[NewLine]Node: 17[NewLine]Connection to: 0 -- 0.47091943[NewLine]Connection to: 1 -- 3.6070724[NewLine]Connection to: 2 -- 0.26366144[NewLine]Connection to: 3 -- -4.403852[NewLine]Connection to: 4 -- 4.2140718[NewLine]Connection to: 5 -- 2.901058[NewLine]Connection to: 6 -- 0.5952624[NewLine]Connection to: 7 -- 2.4838982[NewLine]Connection to: 8 -- 0.9760545[NewLine]Connection to: 9 -- -3.0247433[NewLine]Node END[NewLine]Node: 18[NewLine]Connection to: 0 -- -1.4654683[NewLine]Connection to: 1 -- 1.4703655[NewLine]Connection to: 2 -- 1.6049168[NewLine]Connection to: 3 -- -6.392949[NewLine]Connection to: 4 -- -0.31352192[NewLine]Connection to: 5 -- -4.939065[NewLine]Connection to: 6 -- 1.4098041[NewLine]Connection to: 7 -- 5.235056[NewLine]Connection to: 8 -- -2.409873[NewLine]Connection to: 9 -- -1.4107069[NewLine]Node END[NewLine]Node: 19[NewLine]Connection to: 0 -- 0.94544035[NewLine]Connection to: 1 -- 3.810293[NewLine]Connection to: 2 -- 4.9727345[NewLine]Connection to: 3 -- 3.5097287[NewLine]Connection to: 4 -- -3.4742446[NewLine]Connection to: 5 -- -3.0425003[NewLine]Connection to: 6 -- -5.7232256[NewLine]Connection to: 7 -- 0.14109911[NewLine]Connection to: 8 -- -0.2794705[NewLine]Connection to: 9 -- 0.47562116[NewLine]Node END[NewLine]Node: 20[NewLine]Connection to: 0 -- 5.958788[NewLine]Connection to: 1 -- 0.6676275[NewLine]Connection to: 2 -- 0.083406255[NewLine]Connection to: 3 -- 2.4817393[NewLine]Connection to: 4 -- -1.3647258[NewLine]Connection to: 5 -- -2.4745872[NewLine]Connection to: 6 -- 2.5374053[NewLine]Connection to: 7 -- -3.7505355[NewLine]Connection to: 8 -- -1.6918374[NewLine]Connection to: 9 -- 4.8552394[NewLine]Node END[NewLine]Node: 21[NewLine]Connection to: 0 -- 2.3280208[NewLine]Connection to: 1 -- -2.1165574[NewLine]Connection to: 2 -- -1.9278841[NewLine]Connection to: 3 -- -0.21840678[NewLine]Connection to: 4 -- -6.9978743[NewLine]Connection to: 5 -- -3.240834[NewLine]Connection to: 6 -- -1.5532302[NewLine]Connection to: 7 -- 0.29389262[NewLine]Connection to: 8 -- 3.3664432[NewLine]Connection to: 9 -- -4.3887596[NewLine]Node END[NewLine]Node: 22[NewLine]Connection to: 0 -- -0.7685253[NewLine]Connection to: 1 -- 1.9502714[NewLine]Connection to: 2 -- 0.7916885[NewLine]Connection to: 3 -- -2.0902154[NewLine]Connection to: 4 -- 2.025815[NewLine]Connection to: 5 -- -6.423198[NewLine]Connection to: 6 -- -0.27555227[NewLine]Connection to: 7 -- 2.371897[NewLine]Connection to: 8 -- 5.0171037[NewLine]Connection to: 9 -- -2.3086202[NewLine]Node END[NewLine]Node: 23[NewLine]Connection to: 0 -- 4.008627[NewLine]Connection to: 1 -- -0.18484546[NewLine]Connection to: 2 -- 2.3161325[NewLine]Connection to: 3 -- -0.8647119[NewLine]Connection to: 4 -- -4.924075[NewLine]Connection to: 5 -- -1.5422835[NewLine]Connection to: 6 -- 0.15333821[NewLine]Connection to: 7 -- 5.3745813[NewLine]Connection to: 8 -- -7.205515[NewLine]Connection to: 9 -- 2.0987108[NewLine]Node END[NewLine]Node: 24[NewLine]Connection to: 0 -- -1.2041568[NewLine]Connection to: 1 -- -0.6883772[NewLine]Connection to: 2 -- -0.35563958[NewLine]Connection to: 3 -- 0.9434157[NewLine]Connection to: 4 -- -8.695367[NewLine]Connection to: 5 -- -1.9787976[NewLine]Connection to: 6 -- 1.0688968[NewLine]Connection to: 7 -- -6.90677[NewLine]Connection to: 8 -- 1.5582826[NewLine]Connection to: 9 -- 0.63921934[NewLine]Node END[NewLine]Node: 25[NewLine]Connection to: 0 -- -3.1754096[NewLine]Connection to: 1 -- -0.9333089[NewLine]Connection to: 2 -- 4.2946515[NewLine]Connection to: 3 -- -2.4586813[NewLine]Connection to: 4 -- -3.5110738[NewLine]Connection to: 5 -- -4.1369658[NewLine]Connection to: 6 -- -0.4270939[NewLine]Connection to: 7 -- -3.3830726[NewLine]Connection to: 8 -- 6.632372[NewLine]Connection to: 9 -- -5.3966093[NewLine]Node END[NewLine]Node: 26[NewLine]Connection to: 0 -- -1.5886081[NewLine]Connection to: 1 -- 3.2191908[NewLine]Connection to: 2 -- -6.9304566[NewLine]Connection to: 3 -- 5.20173[NewLine]Connection to: 4 -- 0.4730354[NewLine]Connection to: 5 -- 0.7684692[NewLine]Connection to: 6 -- -2.6178815[NewLine]Connection to: 7 -- 2.3823428[NewLine]Connection to: 8 -- -0.28035253[NewLine]Connection to: 9 -- 1.4490935[NewLine]Node END[NewLine]Node: 27[NewLine]Connection to: 0 -- -4.776859[NewLine]Connection to: 1 -- -3.3735316[NewLine]Connection to: 2 -- -4.758358[NewLine]Connection to: 3 -- -1.844971[NewLine]Connection to: 4 -- 4.0548053[NewLine]Connection to: 5 -- -0.34578282[NewLine]Connection to: 6 -- 5.7300262[NewLine]Connection to: 7 -- 0.77220845[NewLine]Connection to: 8 -- -3.2622838[NewLine]Connection to: 9 -- -2.8862493[NewLine]Node END[NewLine]Node: 28[NewLine]Connection to: 0 -- 1.564866[NewLine]Connection to: 1 -- 1.5397379[NewLine]Connection to: 2 -- 0.50779015[NewLine]Connection to: 3 -- 2.159746[NewLine]Connection to: 4 -- -1.775611[NewLine]Connection to: 5 -- -1.4937477[NewLine]Connection to: 6 -- -1.8249602[NewLine]Connection to: 7 -- -3.2372203[NewLine]Connection to: 8 -- 0.6224305[NewLine]Connection to: 9 -- 2.2234852[NewLine]Node END[NewLine]Node: 29[NewLine]Connection to: 0 -- -4.18783[NewLine]Connection to: 1 -- 1.6428742[NewLine]Connection to: 2 -- 0.5631289[NewLine]Connection to: 3 -- 3.4515243[NewLine]Connection to: 4 -- -5.2459583[NewLine]Connection to: 5 -- -2.0929303[NewLine]Connection to: 6 -- 5.7028[NewLine]Connection to: 7 -- 4.1306057[NewLine]Connection to: 8 -- 4.0182385[NewLine]Connection to: 9 -- -2.6705024[NewLine]Node END[NewLine]Layer END[NewLine]Layer: 2[NewLine]Node: 0[NewLine]Connection to: 0 -- 0.65380913[NewLine]Connection to: 1 -- -2.9249797[NewLine]Connection to: 2 -- -3.5970876[NewLine]Connection to: 3 -- -2.5849183[NewLine]Node END[NewLine]Node: 1[NewLine]Connection to: 0 -- 2.2396443[NewLine]Connection to: 1 -- 2.9474883[NewLine]Connection to: 2 -- -1.4533461[NewLine]Connection to: 3 -- -1.3393986[NewLine]Node END[NewLine]Node: 2[NewLine]Connection to: 0 -- 1.512814[NewLine]Connection to: 1 -- 1.06467[NewLine]Connection to: 2 -- -1.0033741[NewLine]Connection to: 3 -- -1.6462263[NewLine]Node END[NewLine]Node: 3[NewLine]Connection to: 0 -- -2.2246215[NewLine]Connection to: 1 -- 3.4823525[NewLine]Connection to: 2 -- 0.60595095[NewLine]Connection to: 3 -- -1.146745[NewLine]Node END[NewLine]Node: 4[NewLine]Connection to: 0 -- -1.9265621[NewLine]Connection to: 1 -- 2.067029[NewLine]Connection to: 2 -- 0.3249935[NewLine]Connection to: 3 -- 9.137906[NewLine]Node END[NewLine]Node: 5[NewLine]Connection to: 0 -- 1.6299102[NewLine]Connection to: 1 -- -0.6968645[NewLine]Connection to: 2 -- -4.1619606[NewLine]Connection to: 3 -- 1.6204258[NewLine]Node END[NewLine]Node: 6[NewLine]Connection to: 0 -- 5.3982434[NewLine]Connection to: 1 -- -3.2044582[NewLine]Connection to: 2 -- 3.6829147[NewLine]Connection to: 3 -- 0.95895964[NewLine]Node END[NewLine]Node: 7[NewLine]Connection to: 0 -- 2.154767[NewLine]Connection to: 1 -- -6.835373[NewLine]Connection to: 2 -- 3.032266[NewLine]Connection to: 3 -- -2.1822677[NewLine]Node END[NewLine]Node: 8[NewLine]Connection to: 0 -- -3.7778778[NewLine]Connection to: 1 -- -3.460988[NewLine]Connection to: 2 -- 5.596477[NewLine]Connection to: 3 -- -2.7604191[NewLine]Node END[NewLine]Node: 9[NewLine]Connection to: 0 -- 1.9107902[NewLine]Connection to: 1 -- 1.7429608[NewLine]Connection to: 2 -- -0.5292094[NewLine]Connection to: 3 -- -0.43797904[NewLine]Node END[NewLine]Layer END[NewLine]Layer: 3[NewLine]Node: 0[NewLine]Node END[NewLine]Node: 1[NewLine]Node END[NewLine]Node: 2[NewLine]Node END[NewLine]Node: 3[NewLine]Node END[NewLine]Layer END[NewLine]");
        
        return(Math.floor(Math.random() / 0.3))
    }

    //Access file and extract brain string
    readBrain()
    {
        fetch('./BestBrain.txt')
        .then((r) => r.text())
        .then(text  => {
            console.log(text);
        })  
        //console.log(this.bestBrain  + "Zfdasfasdf ");
    }

    //Convert string into usable data structure
    //To improve efficiency massively I can change the structure brain is stored in so there's less linear searching.
    //Test using a js variable brainStr to decouple with readBrain() temporarily
    interpretBrain(brainStr)
    {
        let brainLines = brainStr.split("[NewLine]");

        //First determine the shape of the brain by counting layers and edges
        //Because it's fully connected, we can deduce nodes by edges in previous layer
        //then use a map to store activation energy of each node based on cumulative edge inputs
        let currentLayer = 0;
        let currentNode = 0;
        let brain = []; //May need to change brain structure later if we don't want fully connected
        let currentNodeConnections = []
        for(let i = 0; i < brainLines.length; i++)
        {
            if(brainLines[i].startsWith("Layer: "))
            {
                currentLayer = parseInt(brainLines[i].split(": ")[1]);
                brain.push([]);
            }
            
            else if(brainLines[i].startsWith("Node: "))
            {
                currentNode = parseInt(brainLines[i].split(": ")[1]);
                brain[currentLayer].push([]);
            }

            //Could use first value as test to see if they match index?
            else if(brainLines[i].startsWith("Connection to: "))
            {
                let edgeWeight = parseFloat(brainLines[i].split("-- ")[1]);
                brain[currentLayer][currentNode].push(edgeWeight);
            }
        }

        console.log(brain);
    }

    //bestBrain = ""; //insert here flattened brain string with newline character replaced with | or something
  }

class Node 
{
    id = -1;
    outgoingEdges = new Object(); //List of connected nodes with their associated edge weight.
}


